<!-- @format -->

# Emall web app

Table of contents

[Intro](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#intro)

[Tech Stack](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#tech-stack)

[Installation](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#installation)

[RoadMap](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#roadmap)

## Intro

Emall is an e-commerce web app built as a portfolio project.

## Tech Stack

- React Redux Firebase
- Prettier + ESLint + Airbnb Style Guide

## Installation

`npm install (Install all dependencies)`

##### To deploy on Heroku:

Create a free Heroku account then install the Heroku CLI on macOS
`brew tap heroku/brew && brew install heroku`

More informations about heroku CLI installation [there](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

Then:

```
heroku login
heroku create Emall-live --buildpack https://github.com/mars/create-react-app-buildpack.git
```

More informations about the buildpack [there](https://github.com/mars/create-react-app-buildpack). Then:

```
git push heroku master
```

## RoadMap

- [x] Core App, homepage + shop pages + checkout page.
- [x] Auth with firebase.
- [x] Redux state.
- [ ] style-component.
- [ ] typescript.
- [ ] stripe API.
- [ ] Firebase auth error.
- [ ] Firestore DB.
- [ ] responsive.
- [ ] test.
