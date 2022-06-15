addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
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
    "solid-airport",
  ];
  let url = new URL(request.url);

  if (slugs.some(url.pathname.split("/")[1])) {
    let body = `<pre>\nLab SSH credentials:\nssh -i [privatekey file] cloudflare@${slug}.cf-tme.com<a href="https://zt-access-london-lab.cf-tme.workers.dev/">Download private key here</a></pre>`;
    return new Response(body, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
  return fetch(request);
}
