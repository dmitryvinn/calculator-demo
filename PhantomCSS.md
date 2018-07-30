1) Install PhantomCSS
npm install phantomcss

2) Update test script
 "scripts": {
    "test": "casperjs test tests/calculator.test.js"
  },


3) Run tests
npm test





















Demo:
1) Internal service is on local
http://localhost:8080/calculator-normal.html
http://localhost:8080/calculator-rearranged.html

2) Delete last line
3) Switch to rearranged
4) Run test:
npm test tests/calculator.test.js
npm test tests/result.test.js