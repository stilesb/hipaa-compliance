# Catalyze HIPAA Docs

The Catalyze HIPAA Docs are a series of files outlining how Catalyze not only complies with HIPAA, but succeeds in building a better, more secure environment that assists companies in mitigating risk and proving compliance.

We encourage contributions and adaption to this project. For guidelines on how to contribute please see the `CONTRIBUTING.md` file.

### Local Setup

The core value of this repository is located in the form of markdown files. These can be found in: `/source/sections`. You can pull these files down and view them in any markdown editor ([mou](http://25.io/mou/), [sublime text plugin](https://github.com/revolunet/sublimetext-markdown-preview)). For viewing the files like you see [here](//hipaa.catalyze.io) please see the following instructions:

**Running the site locally**

[hipaa.catalyze.io](//hipaa.catalyze.io) was built using [Middleman](//middlemanapp.com), a static site generator. To use middleman locally or on your website you'll first need to install Ruby and Ruby Gems. Once you have your ruby environment setup you can continue installing middleman:

- Fork this repository
- `git clone https://github.com/USERNAME/HIPAA.git`
- `cd HIPAA`
- `bundle install` or `bundle exec install`

Once the previous commands have executed error free you can run the site locally using `middleman`. The site can be found here at `http://localhost:4567`. To build the static site you can run `middleman build`. This will output the assets and index file into the `build` directory. From here you can host the static files on your server. We do ask that you change the logo to your own and change brand colors where appropriate.