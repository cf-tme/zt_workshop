#Cloudflare Zero Trust Network Access Lab
Welcome to to the ZTNA Lab - this lab will focus on connecting multiple applications to Cloudflare over a single tunnel via our app connector Cloudflare Tunnel, and applying Zero Trust rules on top of your application after onboarding it to Cloudflare Access. 

## SSH access to the lab
Start by opening either powershell or terminal (Windows/Mac, respectively). We'll use this to SSH into our origin server, an Ubuntu 20.04 VM. Below is a link to the private key you'll need to access the system. 

[rsa-private-key](/


if you can't download this file, here are some instructions for getting it onto your device.
```

```

- open your favorite text editor and copy/paste the above text into it.
- once that's done, save the file without an extension (Generally it's okay if it has an extension but best practice is to save it without one)

Run the following command in powershell/terminal to access with the username+password cloudflare #savetheinternet

```sh
ssh -i [privatekey file] cloudflare@<lab-slug>.cfiq.io
```

Now you have SSH access to your device.

## Create a tunnel for Jira
Keep that SSH terminal up, but go back to your Zero Trust dashboard. 

Select Access >> Tunnels and create a brand new tunnel. Name it whatever you'd like.

[image-of-tunnel-dash]

Next, you'll see the following screen. These are pre-baked commands that you'll need to copy into your SSH terminal in order to establish connectivity to Cloudflare. When you do, you'll see your device pop up in the 'connectors' screen.

[image-of-tunnel-connectors]

Once you see your server appear there, go to the next page.

Here, you're going to configure your public-facing hostname and the service it'll run. Since we're configuring jira, I've called my hostname jira.ancient-uncle.cfiq.io

The service will be HTTP localhost:8000

[image-of-tunnel-hostname-config]

Save the tunnel once you've entered that in.

## Onboard Jira to Cloudflare Access

Now that you have the tunnel, let's go to Cloudflare Access and onboard our first application. 

Add an application, and select "Self-Hosted" from the options available

[image-of-app-types]

Then, fill in the following information

- on the first page, enter the application name, and then the domain + hostname (subdomain) you configured for your tunnel
[image-of-page-1]

- on the next page, set up who has access to this application. For the purposes of this exercise, only enter your own email into the 'include' field.
[image-of-page-2]

- then, for the final page, no additional configuration is required. go ahead and save the application. If you don't see your VM on the Access page, refresh it.

## Test access to Jira
We've configured Jira, but let's try and access it now. Navigate to the domain you onboarded to cloudflare (in this example, jira.ancient-uncle.cfiq.io). You should reach a Cloudflare Access login page.



## Add another application to your tunnel

## Onboard Juiceshop to Cloudflare Access

## Test access to Juiceshop

## Add a Private IP route to your tunnel

## Onboard Private IP application to Cloudflare Access 

## Test access to Private IP application

## ZT Rule Exercise - Geographic Location

## Enabling Clientless RBI

## ZT Rule Exercise - Gateway

## Add Browser-Based SSH app to tunnel

## Onboard Browser-Based SSH application to Cloudflare Access

## Access Browser-Based SSH application

## Congrats! you're done. great job!