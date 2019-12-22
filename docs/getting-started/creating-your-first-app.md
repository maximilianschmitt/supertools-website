---
position: 2
title: Creating your first app
---

# Creating your first app

If you're reading this, you probably just set up your Supertools instance that's greeting you with a clean, blank canvas – full of opportunities:

<img class="wide" srcset="/public/images/docs/getting-started/empty-state-wide@2x.png 2x, /public/images/docs/getting-started/empty-state-wide.png" src="/public/images/docs/getting-started/empty-state-wide.png">

## 1. Create your app on Supertools

On the left-hand sidebar, enter "Hello world" into the input that says "App name" and then click "Create":

<!-- Image of form -->
<img srcset="/public/images/docs/getting-started/empty-create-app-form@2x.png 2x, /public/images/docs/getting-started/empty-create-app-form.png" src="/public/images/docs/getting-started/empty-create-app-form.png">

By default, Supertools sets up new apps as simple form applications that you can then easily change.

The default form application is just an input and a button. You can input your name and the app will say hello to you.

<!-- Image of default app template -->
<img srcset="/public/images/docs/getting-started/default-app-template@2x.png 2x, /public/images/docs/getting-started/default-app-template.png" src="/public/images/docs/getting-started/default-app-template.png">

In order to make a change to this app, grab the app's git URL from the right-hand sidebar.

You will see a warning that you must add an SSH key to Supertools:

<!-- Image SSH key warning -->
<img srcset="/public/images/docs/getting-started/ssh-key-warning@2x.png 2x, /public/images/docs/getting-started/ssh-key-warning.png" src="/public/images/docs/getting-started/ssh-key-warning.png">

## 2. Generate an SSH key

Generating SSH keys is pretty straight-forward. If you already have an SSH key that you would like to use with Supertools, you can skip this section.

If you don't have an SSH key yet, please <a href="https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank">follow this excellent guide by GitHub</a> and then come back here.

## 3. Add your SSH key to Supertools

To add your SSH key, follow the link in the sidebar or, alternatively, go to "Settings" and then "SSH keys".

<!-- SSH keys page -->
<img srcset="/public/images/docs/getting-started/ssh-keys-page@2x.png 2x, /public/images/docs/getting-started/ssh-keys-page.png" src="/public/images/docs/getting-started/ssh-keys-page.png">

In the form, paste your **public key** and give it a name so you can remember which one it is.

Now that your SSH key has been added to Supertools, you can clone and push to any repository you have access to.

## 4. Clone your app

Back to the right-hand sidebar of your app, grab the git URL of your application and copy it.

In your terminal, clone the repository by typing:

```
$ git clone <repo-url>
$ cd hello-world
```

Now open the app in your favorite text editor.

## 5. Make changes

**Tip:** We won't be needing it for this little walkt-hrough, but: if you install your app's dependencies with `yarn` or `npm install` and you then run `yarn dev` (`npm run dev`), you can work on your application locally before pushing your changes back to Supertools.

Let's introduce a change to the app for demonstration purposes. We're going to make the background of the page yello.

Inside `src/views/index.pug` find the following line:

```
    body
```

Replace it with:

```
    body(style="background: lightyellow;")
```

Save the file and push your changes:

```
$ git add .
$ git commit -m 'Make background yellow'
$ git push origin master
```

Now, head back to Supertools and refresh the page to verify that your changes are live:

<!-- Screenshot of app with yellow background -->
<img srcset="/public/images/docs/getting-started/yellow-app@2x.png 2x, /public/images/docs/getting-started/yellow-app.png" src="/public/images/docs/getting-started/yellow-app.png">

Next, we will add some team mates to your app.
