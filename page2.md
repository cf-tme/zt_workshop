# Configure identity provider

Open the Zero Trust Dashboard:
![ztdb.jpg](https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Screenshot%20Home%20%20CF%20ZT%20Lab%20-%20chunky-photo%20%20Cloudflare%202022-06-14%20at%2006.02%20prfpmE96.jpg)

## Navigate to the Authentication secton

1. In the Zero Trust dashboard, navigate to Settings > Authentication.

2. In the Login methods card, click Add new.

![saml.gif](https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Screenshot%20Cloudflare%20Zero%20Trust%202022-06-11%20at%2009.36%209yriuMlG.gif)

## Create SAML provider

As part of this lab, we created a SAML-based IdP named TS2 (Trusted SAML Server). TS2 is designed to mock a small organization. It has both admins (which is your role in this lab) and fake users (which we’re not going to do anything with right now).

1. Select the **SAML** option and note the metadata import box on the callout:
   ![metadata_upload.png](https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Screenshot%20Settings%20-%20Cloudflare%20Zero%20Trust%202022-06-14%20at%2006.14%20w5nqfq7L.jpg)

2. To retrieve your metadata file, go here: `https://sso.samlserver.net/api/v3/providers/saml/<LAB_SLUG>/metadata/?download`

3. Drag and drop the metadata file into the GUI

4. Press Save (don't press **Test** - this is a mock server!)

```{admonition} Note
You can add multiple identity providers - including multiple providers of the same type
```
# Enable One Time Pin as an Authentication Method

Once you're done with that, go back to the add Authentication menu and select One Time Pin from the options. You'll need this later to sign into your account on the Gateway Lab device.

# Create a Default Location for your account

Next, go into Gateway >> Locations, and create a default location. You won't need to add a source IP, so just delete that part. You'll need this to enable DNS policies on your Zero Trust Account. 

![default-location-policy](https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/Image%206-14-22%20at%207.57%20AM.jpg)

# Configure Device Enrollment Policy for device client (WARP)

Finally, go to Settings >> Devices >> Manage Enrollment Permissions. Youll need to do this to sign into your organization with the device client in later steps.

Create a new rule enabling emails ending in (your email address).

Once that rule is created, go to the Authentication tab, and select One Time Pin (OTP) as an authentication method.