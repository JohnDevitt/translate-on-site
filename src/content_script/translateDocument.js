import _ from "lodash";
import AWS from "aws-sdk";
import keys from "./keys.json";

AWS.config.region = keys.IdentityPoolId.split(":")[0];
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: keys.IdentityPoolId
});
const translate = new AWS.Translate({ apiVersion: "2017-07-01" });

const getVisibleText = element => {
  if (
    ["BODY", "SCRIPT", "NOSCRIPT", "STYLE"].includes(element.tagName) ||
    element.childNodes.length === 0
  )
    return false;
  return element.childNodes[0].nodeValue;
};

const translateString = untranslatedString => {
  const translationObject = {
    Text: untranslatedString,
    SourceLanguageCode: "auto",
    TargetLanguageCode: "de"
  };

  return new Promise((resolve, reject) =>
    translate.translateText(
      translationObject,
      (err, data) => (err ? reject(err) : resolve(data.TranslatedText))
    )
  );
};

const DomWalk = async element => {
  const visibleText = getVisibleText(element);
  const trimmedText = _.trim(visibleText);
  if (visibleText && trimmedText)
    element.innerHTML = await translateString(trimmedText);
  if (element.children.length > 0)
    Array.from(element.children).forEach(child => DomWalk(child));
};

DomWalk(document.body);
