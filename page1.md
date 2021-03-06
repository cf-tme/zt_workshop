# Getting started

## Retrieve your lab identifier

The invitation in your email inbox should take you to your Cloudflare ZT lab account. The account name will look like this: `CF ZT Lab - <LAB_SLUG>`; where `<LAB_SLUG>` is a random two-letter phrase like `sleeping-giant`

Each `LAB_SLUG` identifies/groups your specific resources. It will be used frequently !

`LAB_SLUG` may be used to refer to <i>any</i> hostname, account or compute instance that is needed to complete this workshop. For example, your lab slug will be used to identify a Windows 10 virtual desktop that is available to you for testing end devices. Your lab slug is also used as a dummy username for SAML authentication etc. If you get stuck, just send us your 🐌</p>

## Review your DNS zone settings

Go to [https://dash.cloudflare.com](https://dash.cloudflare.com), select the account `CF ZT Lab - <LAB_SLUG>` and open the only zone, `<LAB_SLUG>.cfiq.io`. Select the DNS panel. You should see nine records total:
| Count | Record Type |
| ----------- | ----------- |
| 2 | `A` |
| 5 | `MX` |
| 2 | `TXT` |

**Do not modify these records!** You will need them to connect to the lab

````{admonition} Note
:class: note
You are free to add new DNS records throughout the course of this lab as you like. For reference, the DNS zones are configured using NS subdelegation, so you can add subdomains that recurse indefinitely:
```bash
$ dig LAB_SLUG.cfiq.io NS +short
# returns the NS hostnames allocated for your zone. e.g.
frida.ns.cloudflare.com.
peter.ns.cloudflare.com.

# If you want, you can make create records like this one:
$ dig trust.no.one.LAB_SLUG.cfiq.io CNAME +short
a-server-defined-by-me.amazonaws.com
```
````
