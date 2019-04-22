import _ from "lodash";
import AWS from "aws-sdk";
import keys from "./keys.json";

AWS.config.region = keys.IdentityPoolId.split(":")[0];
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: keys.IdentityPoolId
});
const translate = new AWS.Translate({ apiVersion: "2017-07-01" });

const hasVisibleText = element => {
  if (["BODY", "SCRIPT", "NOSCRIPT", "STYLE"].includes(element.tagName))
    return false;
  if (element.childNodes.length === 0) return false;
  if (!element.childNodes[0].nodeValue) return false;
  return _.trim(element.childNodes[0].nodeValue);
};

const translateString = untranslatedString => {
  const translationObject = {
    Text: untranslatedString,
    SourceLanguageCode: "auto",
    TargetLanguageCode: "en"
  };

  return new Promise((resolve, reject) =>
    translate.translateText(
      translationObject,
      (err, data) => (err ? reject(err) : resolve(data.TranslatedText))
    )
  );
};

const translateList = async untranslatedList => {
  const transObj = {};
  untranslatedList.forEach(untrans => (transObj[untrans] = untrans));
  console.log(transObj);
  const translatedList = await translateString(JSON.stringify(transObj));
  console.log(JSON.stringify(transObj), translatedList);
  return;
  return JSON.parse(translatedList);
};

const DomWalk = async element => {
  if (hasVisibleText(element))
    element.childNodes[0].nodeValue = await translateString(
      element.childNodes[0].nodeValue
    );
  if (element.children.length > 0)
    Array.from(element.children).map(child => DomWalk(child));
};

const extractVisibleText = element => {
  const visibleTextList = [];
  if (hasVisibleText(element))
    visibleTextList.push(element.childNodes[0].nodeValue);
  if (element.children.length > 0)
    Array.from(element.children).forEach(child => {
      visibleTextList.push(...extractVisibleText(child));
    });
  return visibleTextList;
};

const applyTranslations = (element, translations) => {
  if (hasVisibleText(element))
    element.childNodes[0].nodeValue = translations.shift();
  if (element.children.length > 0)
    Array.from(element.children).forEach(child =>
      applyTranslations(child, translations)
    );
};

//DomWalk(document.body);
const visibleTextList = extractVisibleText(document.body);
translateList(visibleTextList)
  .then(translatedStrings => {
    console.log("hello");
    applyTranslations(document.body, translatedStrings);
  })
  .catch(err => console.error(err));
