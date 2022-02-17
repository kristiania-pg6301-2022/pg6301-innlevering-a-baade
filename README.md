#<ins>Innlevering: React og Express på Heroku</ins>

## **Initial setup**

- [x] Create a READE.md
- [x] `npm init`/root
- [x] npm install/root
    - `npm i -D parcel jest prettier babel-jest "@babel/preset-env"`
    - `npm i -P react react-dom react-router-dom`
- [x] Create client side files
- [x] `npm init`/client
- [x] npm install/client
    - `npm i -D parcel jest babel-jest "@babel/preset-env`
    - `npm i -P react react-dom react-router-dom`
- [x] Create server side files
- [x] `npm init`/server
- [x] npm install/server
    - `npm i -D express body-parser`
    - `npm i -P nodemon`
##Husky
- [x] Install Husky 
  - `npm i -D husky`
  - `npx husky install`
  - `npm set-script prepare "husky install"`
  - `npx husky add .husky/pre-commit "npm run format:check"`
## **Route Requests**
- [x] Routing requests in app
    - Wrap application in `<BrowserRouter`
    - Wrap route sets in `<Routes>`
    - Wrap "destinations" in `<Route path="..." element={<SomeElement />} />`
    - Route with `<Link to="...">`

## List questions
- [x] import *quiz.js* 