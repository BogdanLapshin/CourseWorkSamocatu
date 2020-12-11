const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  );
  
app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductsById)
app.use(express.static("site"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})