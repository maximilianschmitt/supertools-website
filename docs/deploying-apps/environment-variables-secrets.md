---
position: 1
title: "Environment variables & secrets"
---

# Environment variables & secrets

You can use environment variables to store sensitive information like database connection strings.

Values of environment variables can only be seen by users with the `admin` role. Users with the `dev` role can see which variables are available but not their values.

To edit the environment variables of an app, click "Edit secrets" in the right-hand sidebar under "App secrets":

<!-- Environment variables in sidebar -->
<img srcset="/public/images/docs/deploying-apps/environment-variables-sidebar@2x.png 2x, /public/images/docs/deploying-apps/environment-variables-sidebar.png" src="/public/images/docs/deploying-apps/environment-variables-sidebar.png">

After hitting save, your app will be reloaded with the new environment variables.

<!-- Editing environment variables -->
<img srcset="/public/images/docs/deploying-apps/edit-environment-variables@2x.png 2x, /public/images/docs/deploying-apps/edit-environment-variables.png" src="/public/images/docs/deploying-apps/edit-environment-variables.png">

You can access environment variables in your Node.js app with `process.env`. See also the [Node.js docs on process.env](https://nodejs.org/docs/latest-v11.x/api/process.html#process_process_env).
