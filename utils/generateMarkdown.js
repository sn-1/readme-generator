const api = require("./api");

function generateMarkdown(answers, user) {
  return `
  ![](${user.avatar_url})
  # ${user.name}
  ### [E-mail Me Here!](${user.email})
---
  # ${answers.ProjectTitle}

---
## Description 
${answers.ProjectDescription}
---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Badges](#badges)
* [Contributing](#contributing)

---
## Installation

${answers.Install}

---
## Usage 

${answers.Usage}

---
## License

${answers.License}

---
## Credits

${answers.Contributors} Contributors

---
## Badges
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

---
## Contributing

---


## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.

`
;
}

module.exports = generateMarkdown;
