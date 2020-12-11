const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-34-246-141-162.eu-west-1.compute.amazonaws.com',
  database: 'd5eed6dvp9mqcu',
  user:'wbcglutqjuizst',
  password: '532a62045472398b66af1ceaace249b82a5f237bf67c3812b9a770d087bbc510',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getGoods = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGoodById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getGoods,
  getGoodById  
}