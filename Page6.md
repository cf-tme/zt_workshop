#Cloudflare Zero Trust Network Access Lab
Welcome to to the ZTNA Lab - this lab will focus on connecting multiple applications to Cloudflare over a single tunnel via our app connector Cloudflare Tunnel, and applying Zero Trust rules on top of your application after onboarding it to Cloudflare Access. 

## SSH access to the lab
Start by opening either powershell or terminal (Windows/Mac, respectively). We'll use this to SSH into our origin server, an Ubuntu 20.04 VM. Below is a link to the private key you'll need to access the system. 

[rsa-private-key]

if you can't download this file, here are some instructions for getting it onto your device.

```
-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----
```

- open your favorite text editor and copy/paste the above text into it.
- once that's done, save the file without an extension (Generally it's okay if it has an extension but best practice is to save it without one)

Run the following command in powershell/terminal to access with the username+password cloudflare #savetheinternet

```sh
ssh -i [privatekey file] cloudflare@<lab-slug>.cfiq.io
```

Replace <lab-slug> with your assigned name. You should have SSH access to your device.

## Create a tunnel for Jira
Keep that SSH terminal up, but go back to your Zero Trust dashboard. 

Select Access >> Tunnels and create a brand new tunnel. Name it whatever you'd like.

[image-of-tunnel-dash](/ZT%20Access%20Lab%20-%20Tunnel%20Creation%20Start%20Page.png)

Next, you'll see the following screen. These are pre-baked commands that you'll need to copy into your SSH terminal in order to establish connectivity to Cloudflare. When you do, you'll see your device pop up in the 'connectors' screen.

[image-of-tunnel-connectors](/ZT%20Access%20Lab%20-%20Tunnel%20Command%20Generation.png)

Once you see your server appear there, go to the next page.

Here, you're going to configure your public-facing hostname and the service it'll run. Since we're configuring jira, I've called my hostname jira.ancient-uncle.cfiq.io

The service will be HTTP localhost:8000

[image-of-tunnel-hostname-config](/ZT%20Access%20Lab%20-%20Tunnel%20Hostname%20Config%20Jira.png)

Save the tunnel once you've entered that in.

## Onboard Jira to Cloudflare Access

Now that you have the tunnel, let's go to Cloudflare Access and onboard our first application. 

Add an application, and select "Self-Hosted" from the options available

[image-of-app-types](/ZT%20Access%20Lab%20-%20Access%20Application%20Types.png)

Then, fill in the following information

- on the first page, enter the application name, and then the domain + hostname (subdomain) you configured for your tunnel
[image-of-page-1](/ZT%20Access%20Lab%20-%20Jira%20Onboarding%201.png)

- on the next page, set up who has access to this application. For the purposes of this exercise, only enter your own email into the 'include' field.
[image-of-page-2](/ZT%20Access%20Lab%20-%20Jira%20Onboarding%20Access%20Policy.png)

- then, for the final page, no additional configuration is required. go ahead and save the application. If you don't see your VM on the Access page, refresh it.

## Test access to Jira
We've configured Jira, but let's try and access it now. Navigate to the domain you onboarded to cloudflare (in this example, jira.ancient-uncle.cfiq.io). You should reach a Cloudflare Access login page.

[image-of-cf-access-login-page]()

Use your OTP to authenticate to the application. You should see the Jira setup page after authenticating.

[image-of-jira-setup-page](/ZT%20Access%20Lab%20-%20Jira%20Login%20Success.png)

## Add another application to your tunnel

Now, go back into tunnel and edit your existing tunnel configuration. 

[pic-of-edited-tunnel-landing-page](/ZT%20Access%20Lab%20-%20Tunnel%20Re-edit%20Landing%20Page.png)

Above the existing hostname you configured, select 'add hostname'

[image-of-re-edited-tunnel](/ZT%20Access%20Lab%20-%20Add%20Hostname.png)

We're going to add an application called Juiceshop. Name your subdomain Juiceshop and set the service as HTTP localhost:3000 and save it

[image-of-juiceshop-config](/ZT%20Access%20Lab%20-%20juiceshop%20config.png)

## Onboard Juiceshop to Cloudflare Access

You've added a service to your existing tunnel, but you still need to add a new applcation in Cloudflare Access. Go ahead and repeat the process for adding a self-hosted application, but this time call it Juiceshop instead. 

## Test access to Juiceshop

Try and log into juiceshop.<enter-lab-slug>.cfiq.io. The process should be nearly identical to the last application. The purpose of this is to highlight that you can run multiple web-based applications over Cloudflare Tunnel using any port number.

[juiceshop](/ZT%20Access%20Lab%20-%20Juiceshop.png)

## Add a Private IP route to your tunnel

Next, we're going to add a Private IP as an application to Cloudflare Access. Go back to the tunnel you just modified and edit it again. Instead of adding a hostname, you'll need to add a private IP instead. When you're on the appropriate page, go back to your open SSH terminal and run an ifconfig. 

Find your device's 10.10.0.0/24 IP address and add it as a /32 (example: 10.10.0.3/32). 

[pic-of-private-ip-tunnel](/ZT%20Access%20Lab%20-%20Private%20IP%20Page.png)

Save the tunnel again. 

## Onboard Private IP application to Cloudflare Access 

Add a Private IP application in Cloudflare Access now. You'll be redirected to a different page than before. 

[private-ip-app-config](/ZT%20Access%20Lab%20-%20Private%20IP%20Config%20Page.png)

Fill in the private IP you documented in the tunnel, and continue. This will bring you to a new set of rules.

[private-app-rules-config](/ZT%20Access%20Lab%20-%20Private%20IP%20App%20Rules.png)

These rules require no editing, you can simply save the application now

## Test access to Private IP application

Inside the Gateway Lab you configured yesterday, turn on Cloudflare Zero Trust and type in the private IP address of your application. You should be able to access it via the private IP, even though it's on a completely different network.

## ZT Rule Exercise - Geographic Location

Now, go back to your ZT dashboard. We're going to apply a device posture rule to your Jira application. Device posture rules can be found in the same area where you included your email in the application (so edit Jira ) 

[pic-of-rules-page](/ZT%20Access%20Lab%20-%20Device%20Posture%20Rules.png)

Instead of selecting an 'include' rule, we're instead going to add a 'require' rule. 

We'll add authentication method and select multi-factor authentication. Save this rule, and then save the application.

Try and log into Jira again. This time it should fail, because your account doesn't have any 2FA methods attached to them.


## Enabling Clientless RBI

Now, we're going to use device posture rules in service of an interesting use case. To do this, however, we'll need to add a new function to your account. 

Go to Settings >> Browser Isolation.

[pic-of-RBI-clientless-enablement-page](/ZT%20Access%20Lab%20--%20Settings%20Page.png)

Turn on Clientless Browser Isolation, then manage your Clientless RBI Rules

[pic-of-RBI-rule-generation](/ZT%20Access%20Lab%20-%20Clientless%20RBI%20Rule.png)

Add a rule that allows your email address to authenticate to Cloudflare's Clientless RBI service.

Next, go to My Team >> Devices >> Device Posture

[pic-of-Device-Posture](/ZT%20Access%20Lab%20-%20My%20Team%20--%20Devices%20--%20Posture.png)

Then, add a device posture element, and select gateway from the options.

[pic-add-posture](/ZT%20Access%20Lab%20-%20Add%20Device%20Posture.png)

## ZT Rule Exercise - Gateway

Go back and edit your Jira policy, and remove the multi-factor authentication requirement. Instead, replace it with a gateway requirement. Save the policy and then save the application, and if you're inside your Gateway Windows VM, turn off your WARP device client. 

Try to access the Jira application right now, and you should receive a failure message before you even reach a login page. This is because Cloudflare detects the absence of a gateway or device client on your computer.

[gateway-fail](/ZT%20Access%20Lab%20-%20Gateway%20Failure.png)

Instead, navigate to your Clientless RBI Webpage

<lab-slug>.cloudflareaccess.com/browser

[image-of-RBI-URL](/ZT%20Access%20Lab%20-%20Clientless%20RBI%20URL%20in%20Browser.png)

After logging in, you should see a page that looks like this. 

[image-of-RBI-search-bar](/ZT%20Access%20Lab%20-%20Clientless%20RBI%20Search%20Bar.png

Type in your Jira url and navigate to it. You should reach a login page this time.

## Add Browser-Based SSH app to tunnel

Finally, we're going to expose a non-web application over a webpage with Cloudflare Access. Go back into your tunnel configuration file and edit it one more time

Add a new service for SSH, and save it

## Onboard Browser-Based SSH application to Cloudflare Access

Go back to Access and add this SSH application via the hostname that you just created. However, you'll need to add one more thing in the final settings page.

[BBSSH-config](/ZT%20Access%20Lab%20-%20SSH%20Onboarding%20Part%201.png)

Make sure you turn on automatic cloudflared authentication, and also select SSH in Browser Rendering. This will allow Cloudflare to render the SSH terminal in the browser.

[bbssh-settings](/ZT%20Access%20Lab%20-%20BBSSH%20Settings%20Page.png)

## Access Browser-Based SSH application

Log into your Browser-Based SSH application, and copy/paste the private key you saved at the beginning of the lab. Then put in your credentials. 

[pic-of-browser-based-ssh-app-settings](/ZT%20Access%20Lab%20-%20BBSSH%20Access%20Login%20Page.png)

You should see an SSH terminal render in front of you. Try running some commands!

## Congrats! you're done. great job!