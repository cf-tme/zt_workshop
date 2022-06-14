# REST API and syscalls for setting up lab users

A number of tasks need to be run when a lab begins on the Linux instance where `cloudflared` is installed.


```js
// generate random two word prefix for participants and create corresponding DNS record
// https://www.npmjs.com/package/random-words
// https://www.npmjs.com/package/uuid
const randomWords = require('random-words');
const { v4: uuidv4 } = require('uuid');

function setHostname () {
  const userId = uuidv4(),
        version = 1,
        twoWordPrefix = randomWords({ exactly: 2 })),

  return `${twoWordPrefix}-${userId}-${version}.lab.cfiq.io`)
}

fs.writeFileSync('/etc/hostname', setHostname())
```

Subsequent REST calls will simply read `/etc/hostname` and update the accounts accordingly

```sh
# Update Access domain
# https://api.cloudflare.com/#access-organizations-update-access-organization
PUT accounts/:identifier/access/organizations
```

```sh
# Update account name
PUT accounts/:identifier
```

```sh
# Update zone DNS records with machine / lab ID
https://github.com/michaelkourlas/node-cloudflare-dynamic-dns
```