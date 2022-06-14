# Create a Gateway DNS policy

1. Navigate to Gateway >> Policies

2. Block content categories which go against your organization’s acceptable use policy.

Selector | Operator | Value | Action
Application | in | Netflix | Block

![new-dns-policy](https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/FILENAME.png)

3. Save the Policy, and after a few moments try to access www.netflix.com. You should get a block page

# Create a Gateway HTTP Policy

1. Now, navigate to the HTTP Submenu. We're going to create another policy that deals with tenant control. We will be controlling access to Google. With our policy builder, it should look something like this:

Selector | Operator | Value | Action
Application | in | Google Workspace | Allow

2. However, we're going to add another section at the bottom here, which controls the instance. We'll add a header to our request here, and set X-Googapps-Allowed-Domains to Cloudflare.com. This will make all other instances of Google Workspace inaccessible. 

![new-http-policy] https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Image%206-14-22%20at%205.33%20AM.jpg

3. Go ahead and save the policy, and in a new window try to access your instance of Google. You should receive another block page.

# Create a Remote Browser Isolation policy

1. Once you've tested your HTTP tenant control policy, let's go ahead and build a new Remote Browser Isolation policy. We're going to isolate all websites that your browser navigates to. Our initial selector should look like this.

Selector | Operator | Value | Action
Domain | in | .* | Isolate

2. Below that, we will also enable Data Protection Controls on this policy. This will prevent certain actions like copy/paste, printing, uploads and downloads for your isolated session. 

![new-rbi-policy-1] https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Image%206-14-22%20at%205.34%20AM.jpg

3. Save the policy, and bounce (turn off and on again) your connector. Wait a moment for the policy to propagate, and then navigate to a website of your choice.

4. Once inside your website of choice, enable the browser-isolation toolbar with ctrl+tilde (~). You should see the following overlay appear on the left-hand side of your browser. If you do not see this toolbar, your browser is not isolated.

![new-rbi-policy-3] https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Image%206-14-22%20at%204.48%20AM.jpg

5. Test the Data protection controls that you've enabled in the policy by trying to copy/paste some content, or print a webpage. Both actions should fail.

# Congratulations! You've reached the end of the lab. 




