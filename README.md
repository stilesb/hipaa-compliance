# Catalyze HIPAA Docs

![status](https://codeship.com/projects/a876a370-4a85-0133-3108-0614b4f6602f/status?branch=master)

The Catalyze HIPAA Docs exist to outline the ways Catalyze, Inc. complies with HIPAA. These docs have been open sourced in order to help the health IT community grow and improve patient care through secure, usable software.

- The license for these docs can be found [here](https://github.com/catalyzeio/HIPAA/blob/master/LICENSE.md%20)
- The contributing guidelines can be found [here](https://github.com/catalyzeio/HIPAA/blob/master/CONTRIBUTING.md)

# Getting Started

The Catalyze HIPAA docs are built using [Middleman](https://middlemanapp.com/), a static site generator. Please follow the [installation instructions](https://middlemanapp.com/basics/install/) for Middleman before continuing.

Once you have Middleman installed and working you can complete the following to get a working copy of these docs on your local machine:

- `git clone https://github.com/catalyzeio/HIPAA.git`
- `cd HIPAA`
- `bundle install`

**Commands:**

- `rake build` generates the static HTML, CSS, and JavaScript files
- `rake run` allows you to view the site locally
- `rake sass` compiles styles changes
- `rake serve_static` runs a simple web server in the build directory