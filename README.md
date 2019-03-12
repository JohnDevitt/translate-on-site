###Translate on Site is webExtension for automatically translating websites on load.

#Configuring AWS

This web extension uses AWS Translate for machine translation, as well as AWS Cognito to provide **unauthenticated access** to AWS Translate. As Such both of these services need to be configured before running the app. Below are steps I followed to set this up(largely based on [this](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html) guide).

###Step 1: Create an Amazon Cognito Identity Pool

Firstly, an Amazon Cognito identity pool to provide unauthenticated access to the Amazon Translate service needs to be created. Creating an identity pool also creates two IAM roles, one to support users authenticated by an identity provider and the other to support unauthenticated guest users.

For now, only the unauthenticated user role will be used. Authenticated users may be added later.

###To create an Amazon Cognito identity pool

1.  Sign in to the AWS Management Console and open the Amazon Cognito console at [https://console.aws.amazon.com/cognito/](https://console.aws.amazon.com/cognito/).

2.  Choose **Manage Identity Pools** on the console opening page.

3.  On the next page, choose **Create new identity pool.**

    **Note** If there are no other identity pools, the Amazon Cognito console will skip this page and open the next page instead.

4.  In the **Getting started wizard**, type a name for your identity pool in **"Translate on Site"**

5.  Choose **Enable access to unauthenticated identities.**

6.  Choose **Create Pool.**

7.  On the next page, choose **View Details** to see the names of the two IAM roles created for your identity pool.

8.  Choose **Allow.**

9.  Navigate to the **Sample code** page. Copy the identity pool ID(including the region) and create the file: `src/keys.json` with your identity pool id as follows:

```
{
  "IdentityPoolId": <IdentityPoolId>
}
```

###Step 2: Add a Policy to the Created IAM Role
To enable browser script access to Amazon Translate for machine translation, use the unauthenticated IAM role created for your Amazon Cognito identity pool. This requires you to add an IAM policy to the role. For more information on IAM roles, see [Creating a Role to Delegate Permissions to an AWS Service](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html) in the _IAM User Guide._

###To add an Amazon Translate policy to the IAM role associated with unauthenticated users

1.  Sign in to the AWS Management Console and open the IAM console at [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/).

2.  In the navigation panel on the left of the page, choose **Roles.**

3.  In the list of IAM roles, click on the Cognito_TranslateonSiteAuth_Role link previously created by Amazon Cognito.

4.  In the **Summary** page for this role, choose **Attach policies.**

5.  In the **Attach Permissions** page for this role, find and then select the check box for **AmazonTranslateFullAccess.**

6.  Choose **Attach policy.**

After you create your Amazon Cognito identity pool and add permissions for Amazon Translate to your IAM role for unauthenticated users, you are ready to build run or build the web extension.

### Building the Web Extension

To build the webExtension run `yarn run build` in the root directory. This will create the necessary bundles in the webExtension directory. From here it can be:

1.  Tested locally by running `web-ext run` inside the webExtension directory.

2.  Zipped up for signing by running `web-ext build --as-needed` inside the webExtension directory.

This second step will create a zip file which can be installed into your browser after it has been _signed_. To sign an application simply upload the zipped file to their [developer hub](https://addons.mozilla.org/en-US/developers/) and follow the instructions there. Once the signing process it complete a new .xpi directory can be downloaded and simply dragged and dropped into firefox to be installed.
