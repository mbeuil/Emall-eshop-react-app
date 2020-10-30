<!-- @format -->

# Emall web app

Table of contents

[Intro](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#intro)

[Tech Stack](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#tech-stack)

[Installation](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#installation)

[RoadMap](https://github.com/mbeuil/Emall-eshop-react-app/master/README.md#roadmap)

## Intro

Emall is an e-commerce web app built as a portfolio project.

URL:

> https://emall-live.herokuapp.com/

## Tech Stack

- React Hooks React-Router Redux Redux-Saga Firebase Typescript
- Prettier + ESLint + Airbnb Style Guide

## Installation

`npm install (Install all dependencies)`

##### To deploy on Heroku:

Create a free Heroku account then install the Heroku CLI on macOS

`brew tap heroku/brew && brew install heroku`

More informations about heroku CLI installation
[there](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

Then:

```
heroku login
heroku create Emall-live --buildpack https://github.com/mars/create-react-app-buildpack.git
```

More informations about the buildpack
[there](https://github.com/mars/create-react-app-buildpack). Then:

```
git push heroku master
```

## RoadMap

- [x] Core App, homepage + shop pages + checkout page.
- [x] Auth with firebase.
- [x] Redux state.
- [x] style-component.
- [x] Firestore DB.
- [x] typescript.
- [x] asynchronous redux (thunk/saga)
- [x] express backend server for better stripe integration.
- [x] responsive.
- [x] performance.
- [ ] Firebase auth/DB error.
- [ ] test.
