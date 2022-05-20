# Retrieve your lab identifier and resources
## Get your lab ID
* Go to https://example.com/getid/name and copy the `lab_uuid` provided
* The `lab_uuid` will be used to identify the various resources allocated for your lab instance

## Gather your lab resources
* Go to https://dash.cloudflare.com, select **Lab 1 - `lab_uuid`** and open the only website 
* Select the DNS panel
* You should see four hostnames, `loc1`, `loc2`, `loc3` and `rdp_client`
* The IPs associated with the `loc-*` hostnames can be accessed via SSH:
```
# All machines have the same credentials at startup
# username: root   password: admin
ssh root@loc-*.<DOMAIN_NAME>
```
* The RDP client can be accessed using the Microsoft client (https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients)
* Add the IP as a PC