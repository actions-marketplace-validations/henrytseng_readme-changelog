const sdk = require("api")("@developers/v2.0#v2r3flfim83js");
const { getInput } = require("@actions/core");

async function run() {
  const apiKey = getInput("apikey", { required: true });
  const isHidden = getInput("hidden", { required: false });
  const title = getInput("title", { required: false });
  const body = getInput("body", { required: false });

  if (body === "") return;

  // Create entry
  sdk.auth(apiKey);
  sdk
    .createChangelog({
      title: title,
      body: body,
      hidden: isHidden,
    })
    .then(function ({ data }) {
      console.log(data);
    })
    .catch((err) => console.error(err));
}

run();
