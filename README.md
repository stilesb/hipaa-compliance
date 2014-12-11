# Catalyze Internal Wiki

This is a central hub where employees can find technical resources.

![Screen Shot](http://i.imgur.com/JnIUmym.png)

This wiki is not a *wiki* per se. It does not have inline editing functionality and is not open to any visitor. The Catalyze Internal Wiki functions much like Catalyze's [public facing resources](https://resources.catalyze.io) but with a built in deploy script. It has a [middleman](http://middlemanapp.com) base that must be managed locally. Setup, features and deployment processes are noted below.

### Local Setup

**Requirements**

- Ruby -v 1.9.3 or newer, *I highly recommend using [RVM](http://rvm.io/)*
- Bundler, `sudo gem install bundler`
- Middleman gem, `sudo gem install middleman`
- Sass, `sudo gem install sass`

**Setup**

- Clone this repo, `git clone https://github.com/catalyzeio/catalyze-internal-wiki.git`
- Navigate to this repo, `cd catalyze-internal-wiki`
- Install gems, `bundle install` or `sudo bundle install` or if you have RVM simply run `bundle`
- Run the server, `middleman`
- View the site locally, `http://0.0.0.0:4567/`

### Deploy

When working locally be sure to always `git pull origin master` before making new changes. Additions are made often to this wiki and it's important that you're not deploying a version without those changes. To deploy your changes do the following:

- `git add .`
- `git commit -m "Commit message"`
- `git push origin master`
- `middleman deploy`

`middleman deploy` automatically runs the `middleman build`  command for you.


### Features

**Built in**

- Search
- Markdown
- HTML
- ERB
- Syntax highlighting
- Mobile Styles
	- ![Mobile](http://cdn2.dropmark.com/45280/1e931cdf9e33c3f420ad481cd42be6a6683b6f7c/catalyze-internal-wiki-mobile.gif)

**Editing**

- Locally
- TODO, [prose.io](http://prose.io) ?
