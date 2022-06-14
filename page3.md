# Configure Cloudflare Gateway

## Connect to the Gateway Virtual Desktop over RDP

If you don’t have an RDP client installed on your laptop, download the Microsoft Remote Desktop client (for [Windows](https://apps.microsoft.com/store/detail/microsoft-remote-desktop/9WZDNCRFJ3PS) or [Mac](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12)).

In your DNS zone, one of the records looks like this: `[gateway-env.rdp.](https://gateway-env.rdp.confused-cherry.cfiq.io)<LAB_SLUG>.cfiq.io`

Open the Microsoft RDP client, connect to the hypervisor using the `gateway-env` hostname

```
username: cloudflare
password: #Savetheinternet
```

## Install WARP for Windows

1. Download Cloudflare WARP for Windows (https://install.appcenter.ms/orgs/cloudflare/apps/1.1.1.1-windows-1/distribution_groups/release)
2. Navigate to your predefined download folder and open the executable file to install WARP.
3. Follow the instructions to complete installation. Cloudflare WARP will automatically launch and appear in your menu bar with the Cloudflare logo.
4. Click Next and Accept Cloudflare’s privacy policy.
5. DO NOT Toggle WARP right now, as you need to sign in first. Select preferences >> account >> sign into Cloudflare Zero Trust
6. Authenticate to your specific account via OTP
7. WARP is now running.

## Install the Cloudflare Root Certificate

Advanced security features including HTTPS traffic inspection require users to install and trust the Cloudflare root certificate on their machine or device.

​​**Download the Cloudflare root certificate**
First, download the Cloudflare certificate. The certificate is available both as a .pem and as a .crt file. Certain applications require the certificate to be in a specific file type, so ensure you download the most appropriate file for your use case.

- Download certificate (.crt): https://developers.cloudflare.com/cloudflare-one/static/documentation/connections/Cloudflare_CA.crt
- Download certificate (.pem): https://developers.cloudflare.com/cloudflare-one/static/documentation/connections/Cloudflare_CA.pem

Windows offers two options to install the certificate, each having a different impact on which users will be affected by trusting the root certificate. For this lab we'll be installing the certificate for the logged in user only

1. Download the Cloudflare certificate.

2. Right-click the certificate file.

3. Click Open.

   > If you see a Security Warning window, click Open.

4. The Certificate window will appear. Click Install Certificate.
   [cert_install_windows.png](!https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/windows_install_cert.png)

5. Now choose a Store Location.
6. Click Next.
7. On the next screen, click Browse.
8. Choose the Trusted Root Certification Authorities store.
9. Click OK.
   [cert_install2.png](!https://storage.franktaylor.io/a40d5545ab9b313238282d8dc55c33ec34a87f1b/windows_cert_location.png)
10. Click Finish
