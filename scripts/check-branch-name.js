#!/usr/bin/env node
const { execSync } = require("child_process");

// Grab the current branch name
const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

// Define your allowed types and pattern
const pattern =
  /^(?:feature|fix|chore|docs|refactor|test)\/\d+-[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!pattern.test(branch)) {
  console.error(
    `\nInvalid branch name: "${branch}"\n` +
      `   Must follow "<type>/<issue-number>-<description>"\n` +
      `   Allowed types: feature, fix, chore, docs, refactor, test\n` +
      `   Example: feature/1234-add-new-feature\n`
  );
  process.exit(1);
}
