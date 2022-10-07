const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const knex = require('knex')({
  client: 'pg',
  connection: 'postgresql://postgres:5jFtaILuTs1LCIZhVPZh@containers-us-west-55.railway.app:7245/railway',
  searchPath: ['knex', 'public'],
});

app.get('/', async (req, res) => {
  const data = await knex('html').select('*')
  res.send(data);
})

app.get("/:id", async (req, res) => {
  const data = await knex('html').select('*').where('id', req.params.id);
  res.json(data);
});

app.post("/", async (req, res) => {
  const data = await knex('html').insert({code: req.body});
  res.json(data);
});

app.patch("/:id", async (req, res) => {
  const data = await knex('html').where({ id: req.params.id }).update('code', req.body);
  res.json(data);
})

app.delete("/:id", async (req, res) => {
  const data = await knex('html').where({ id: req.params.id }).del();
  res.json(data);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
