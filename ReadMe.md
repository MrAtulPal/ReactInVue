# React component in Vue app using Module Federation Webpack

## Intro
![ReactInVue](https://www.britwise.com/blog/wp-content/uploads/2019/09/vue-vs-react.png)

I'm working as an intern under a product based organization where they uses Micro-frontend architecture in their Applications. One day, they ask me to take initiative to make React app and use react components in the exisiting applications.

## Challenges and solution

* Build React app using [React CRA](https://create-react-app.dev/).

    You can't directly overwrite webpack configs in react. Therefore,I have used [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) or you can use `react-eject`,etc.

* Build Vue app using [Vue CLI](https://cli.vuejs.org/).

## Remote and Host app
Here React App is remote App and Vue App is host app.

## How to run
You have to run both app seprately.
* Run react app
```bash
cd react_app
npm i
npm run start
```
* Run vue app
```bash
cd vue_app
npm i
npm run serve
```