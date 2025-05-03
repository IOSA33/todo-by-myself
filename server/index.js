const cors = require('cors');
const express = require('express');
const client = require('./db');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.use(cors())
app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
      const result = await client.query(`SELECT * FROM todos1`);
      res.status(200).json(result.rows)
    } catch (err) {
      console.log(err);
      res.status(500).send('error 500')
    }
})

app.post('/todos', async (req, res) => {
  const { text } = req.body
  if(!text) {
    return res.status(400).json({error: 'post error'})
  }

  try {
    const result = await client.query(`INSERT INTO todos1 (text) VALUES ($1) RETURNING *`, [text]);
    console.log(result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ error: 'Ошибка при добавлении записи в базу данных' });
  }

  res.status(200).send('ok')
})

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  try {
    await client.query('DELETE FROM todos1 WHERE id = $1', [id])
    res.status(200).send('Task deleted')
  } catch (err) {
    console.log(err)
    res.status(500).send('Error delete method')
  }
})