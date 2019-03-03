## How to run this project

### Install dependencies
In project root folder run
```sh
$ npm install 
```
### Mock server
If you don't have it installed

```sh
$ npm install -g json-server
```

then run:
```sh
$ json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```
### Finally run the dev server

```sh
$ npm start
```