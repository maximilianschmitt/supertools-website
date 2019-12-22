---
position: 1
title: Installation
---

# Installation

## Before we start

This guide is tailored towards Supertools installations on DigitalOcean droplets. If you would like to install Supertools on another platform, please use the installation script as a template and adjust it to your needs.

If you run into any problems during this installation, please create an issue on GitHub and we'll help you out!

## 1. Create your Ubuntu droplet

Log into your control panel on digitalocean.com and create a new droplet.

Select the **Ubuntu 16.04 x64 distribution** with **at least 2GB of RAM**.

While your droplet is being created, head over to the networking tab and configure the DNS records of your Supertools-domain.

## 2. Setup DNS for your domain

Your domain can either be a top-level domain like _example.com_ or a subdomain like _supertools.example.com_. In both cases, you need to create an A record for the main domain and an A record for wildcard subdomains.

**Example – Supertools on top-level domain**

```
A example.com
A *.example.com
```

**Example – Supertools on subdomain**

```
A supertools.example.com
A *.supertools.example.com
```

Make sure both A records are pointing to your newly created droplet.

## 3. Grab a DigitalOcean API key

The provisioning script for Supertools on DigitalOcean will automatically configure HTTPS for your Supertools server. It does this by leveraging [acme.sh](https://github.com/Neilpang/acme.sh) and LetsEncrypt. The DigitalOcean API key is used to automatically setup DNS records to verify your ownership of your domain.

You can create a new API key on DigitalOcean by clicking **"API"** in the sidebar and then the **"Generate New Token"** button. Copy this API key to a secure location, you'll need it in just a minute.

## 4. Install Supertools

Now that we have everything ready and configured, it's time to install Supertools. We've made it as easy as possible for your and created a comprehensive install-script that will get your production-ready Supertools instance setup in just a few minutes.

**Here is what the install-script does on your server:**

1. **Create a user on the system called "git".** This user does not have root access and will be running Supertools.
2. **Disable root access via SSH**
3. **Create a user on the system called "stadmin".** This user has root access and can be used by you to administer the system.
4. **Install Node.js** (Supertools is a Node.js app)
5. **Install pm2** which will manage the Supertools process and the process of every app you deploy to Supertools
6. **Setup git and Gitolite.** Gitolite is used to enable secure deployments of apps via git push for authorized developers on your Supertools instance.
7. **Install and configure NGINX with SSL**
8. **Configure the ufw firewall to allow OpenSSH and NGINX**
9. **Install and configure Supertools**
10. **Setup the system to auto-start Supertools in case of a reboot**

Log into your server via SSH and execute the install script:

```
$ ssh root@supertools.example.com
$ bash <(curl -s https://raw.githubusercontent.com/maximilianschmitt/supertools/master/install.sh)
```

The script will ask you to provide a few things:

-   Your domain (e.g. example.com)
-   Your DigitalOcean API key
-   Your desired Supertools username, email and password
-   Your team's name

Once you've entered those details, let the script run. After it's finished, you're ready to use Supertools. 🎉
