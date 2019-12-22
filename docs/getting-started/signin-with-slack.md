---
position: 4
title: Signin with Slack
---

# Signin with Slack

To activate sign-in with Slack, you must create an application on Slack and adjust some environment variables inside your Supertools instance.

If you haven't yet setup your Supertools instance for Signin with Slack, you will see the following warning in the general settings ("Settings" -> "General settings"):

<!-- Screenshot of "Slack must be configured" warning message -->
<img srcset="/public/images/docs/getting-started/slack-signin-missing-env@2x.png 2x, /public/images/docs/getting-started/slack-signin-missing-env.png" src="/public/images/docs/getting-started/slack-signin-missing-env.png">

## 1. Create your Supertools Slack application

Head over to [api.slack.com/apps](https://api.slack.com/apps) and create a new app. Note down the generated "Client ID" and "Client secret", you will need them soon.

Then – in the sidebar under "Features" – go to "OAuth & Permissions" and add your Supertools domain to the Redirect URLs. E.g. "example.com" if you're hosting Supertools on a top-level domain or "supertools.example.com" if you're on a subdomain.

## 2. Edit your Supertools environment variables

Log into your Supertools instance and open the environment configuration in a text editor (VIM or Nano are common choices):

```
$ ssh git@supertools.example.com
$ vim ~git/supertools/.env
```

Set the variables `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET` to the values that you see in your Slack dashboard under "Settings" -> "Basic Information" -> "App Credentials".

<!-- Screenshot of Slack credentials -->
<img srcset="/public/images/docs/getting-started/slack-signin-app-credentials@2x.png 2x, /public/images/docs/getting-started/slack-signin-app-credentials.png" src="/public/images/docs/getting-started/slack-signin-app-credentials.png">

Save the file to `~git/supertools/.env` and exit the text editor.

## 3. Restart Supertools

To apply the configuration changes, we need to restart Supertools:

```
$ pm2 restart supertools
```

## 4. Activate Slack-Signin in Settings

In your Supertools web interface, go to "Settings" -> "General settings" and click "Sign in with Slack". You will be redirected to Slack and asked to authorize your Supertools Slack app for your Slack workspace.

<!-- Screenshot of Slack signin available -->
<img srcset="/public/images/docs/getting-started/slack-signin-available@2x.png 2x, /public/images/docs/getting-started/slack-signin-available.png" src="/public/images/docs/getting-started/slack-signin-available.png">

Now your Slack team members can log into your Supertools instance!
