
## Chapter 2 

```
  mkdir {public,public/css,public/img,public/js,db,views,views/includes,routes}
  npm init
  npm install express --save
  npm install jade --save
  touch app.js
  touch views/index.jade
  node app.js 

```  

#### Note that, without he following code in the package.json file, the npm start 
#### command will not work

```
"scripts": {
    "start": "node app.js"
  }

```

