const DBL = require("dblapi.js");
const dbl_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg0MzE5NzYwMDc1OTgwOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc2NDE2NDkyfQ.c4Iez4OQf-OtBiGvGs-CcOFOoB40RDNWcThAtNObMfk";
const dbl = new DBL(dbl_token, {
  webhookPort: 5000,
  webhookAuth: "password"
});
dbl.webhook.on("ready", hook => {
  console.log(
    `Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`
  );
});
dbl.webhook.on("vote", vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});
