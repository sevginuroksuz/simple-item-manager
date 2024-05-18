const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item');
const app = express();
const port = 3000;

// MongoDB'ye bağlanma
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());
app.use(express.static('public'));

// CRUD API Rotaları
// Tüm öğeleri listeleme
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'An error occurred while fetching items' });
  }
});

// Yeni öğe ekleme
app.post('/api/items', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newItem = new Item({ name, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'An error occurred while creating item' });
  }
});

// Öğe silme
app.delete('/api/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'An error occurred while deleting item' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
