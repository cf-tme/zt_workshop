async function onRequestGet({ params, request }) {
  let slugs = [
    "ancient-uncle",
    "awful-movie",
    "blushing-mixture",
    "boundless-orange",
    "chilly-insect",
    "chunky-photo",
    "confused-cherry",
    "earthy-bathroom",
    "willing-power",
    "feeble-highway",
    "flaky-outcome",
    "former-buyer",
    "gainful-city",
    "giant-childhood",
    "helpful-dinner",
    "homely-knowledge",
    "jealous-power",
    "lucky-basket",
    "lumpy-driver",
    "meaty-patience",
    "needless-player",
    "noisy-apple",
    "obscene-guitar",
    "piquant-oven",
    "profuse-writer",
    "puny-teacher",
    "purring-context",
    "pushy-basket",
    "quickest-menu",
    "quiet-platform",
    "roaring-theory",
    "rapid-affair",
    "raspy-coffee",
    "royal-housing",
    "ruthless-fortune",
    "shiny-version",
    "silly-effort",
    "smiling-union",
    "solid-airport"
  ]
  let url = new URL(request.url)
  
  let slug = slugs.find(slug => slug === url.pathname.split('/')[1])

  if (slug) {
    let body = `
      <pre><b>Lab SSH credentials:</b>\nssh -i [privatekey file] cloudflare@${slug}.cf-tme.com\n<a href="https://zt-access-london-lab.cf-tme.workers.dev/">Download private key here</a>
      <b>Lab RDP credentials (Access):</b>\nssh -i [privatekey file] cloudflare@${slug}.cf-tme.com\n<a href="https://zt-access-london-lab.cf-tme.workers.dev/">Download private key here</a>
      </pre>
    `
    return new Response(body, { headers: { "id": params.id, "Content-Type": "text/html" } })
  }
  return fetch(request)
}

