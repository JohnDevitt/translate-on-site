import AWS from "aws-sdk";

AWS.config.region = "EU_WEST_1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-west-1:87f42588-4056-47c2-b4e7-7bc8d7e2d486"
});

const translateString = untranslatedString => {
  var translate = new AWS.Translate({ apiVersion: "2017-07-01" });

  translate.translateText(
    {
      Text: "",
      SourceLanguageCode: "auto",
      TargetLanguageCode: "en"
    },
    function(err, data) {
      if (err)
        console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    }
  );
};

export default translateString;
