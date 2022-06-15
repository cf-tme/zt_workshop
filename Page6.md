#Cloudflare Zero Trust Network Access Lab
Welcome to to the ZTNA Lab - this lab will focus on connecting multiple applications to Cloudflare over a single tunnel via our app connector Cloudflare Tunnel, and applying Zero Trust rules on top of your application after onboarding it to Cloudflare Access. 

## SSH access to the lab
Start by opening either powershell or terminal (Windows/Mac, respectively). We'll use this to SSH into our origin server, an Ubuntu 20.04 VM. Below is a link to the private key you'll need to access the system. 

[rsa-private-key]


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

[image-of-cf-access-login-page]

Use your OTP to authenticate to the application.

[image-of-jira-setup-page]

## Add another application to your tunnel

Now, go back into tunnel and edit your existing tunnel configuration. Above the existing hostname you configured, select 'add hostname'

[image-of-re-edited-tunnel]

We're going to add an application called Juiceshop. Name your subdomain Juiceshop and set the service as HTTP localhost:3000 and save it

[image-of-juiceshop-config]

## Onboard Juiceshop to Cloudflare Access

You've added a service to your existing tunnel, but you still need to add a new applcation in Cloudflare Access. Go ahead and repeat the process for adding a self-hosted application, but this time call it Juiceshop instead. 

## Test access to Juiceshop

Try and log into juiceshop.<enter-lab-slug>.cfiq.io. The process should be nearly identical to the last application. The purpose of this is to highlight that you can run multiple web-based applications over Cloudflare Tunnel using any port number.

## Add a Private IP route to your tunnel

Next, we're going to add a Private IP as an application to Cloudflare Access. Go back to the tunnel you just modified and edit it again. Instead of adding a hostname, you'll need to add a private IP instead. When you're on the appropriate page, go back to your open SSH terminal and run an ifconfig.

Find your device's 10.10.0.0/24 IP address and add it as a /32 (example: 10.10.0.3/32). Save the tunnel again.

## Onboard Private IP application to Cloudflare Access 

Add a Private IP application in Cloudflare Access now. You'll be redirected to a different page than before. Fill in the private IP you documented in the tunnel, and continue. This will bring you to a new set of rules.



These rules require no editing, you can simply save the application now

## Test access to Private IP application

Inside the Gateway Lab you configured yesterday, turn on Cloudflare Zero Trust and type in the private IP address of your application. You should be able to access it, even though it's on a completely different network

## ZT Rule Exercise - Geographic Location

Now, go back to your ZT dashboard. We're going to apply a device posture rule to your Jira application. Device posture rules can be found in the same area where you included your email in the application (so edit Jira ) 

[pic-of-rules-page]

Instead of selecting an 'include' rule, we're instead going to add a 'require' rule. 

[pic-of-rule-being-applied]

We'll add authentication method and select multi-factor authentication. Save this rule, and then save the application.

Try and log into Jira again. This time it should fail, because your account doesn't have any 2FA methods attached to them. 

## Enabling Clientless RBI

Now, we're going to use device posture rules in service of an interesting use case. To do this, however, we'll need to add a new function to your account. 

Go to Settings >> Browser Isolation.

[pic-of-RBI-clientless-enablement-page]

Turn on Clientless Browser Isolation, then manage your Clientless RBI Rules

[pic-of-RBI-rule-generation]

Add a rule that allows your email address to authenticate to Cloudflare's Clientless RBI service.

## ZT Rule Exercise - Gateway

Go back and edit your Jira policy, and try to 


## Add Browser-Based SSH app to tunnel

## Onboard Browser-Based SSH application to Cloudflare Access

## Access Browser-Based SSH application

## Congrats! you're done. great job!