const sdk = require('api')('@developers/v2.0#v2r3flfim83js');
const { context, getOctokit } = require("@actions/github");
const { info, getInput, setOutput, setFailed } = require("@actions/core");
const { compareVersions, validate } = require("compare-versions");

const {
  repo: { owner, repo },
} = context;

async function run() {
  const apiKey = getInput("apikey", { required: true });
  const isHidden = getInput("hidden", { required: false });

  // Create entry
  sdk.auth(apiKey);
  sdk.createChangelog({
      title: getInput("title", { required: false }),
      body: getInput("body", { required: false }),
      hidden: isHidden
  })
    .then(function({ data }) {
      console.log(data);
    })
    .catch(err => console.error(err));
}

run()
