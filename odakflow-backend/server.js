const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware (Ara Yazılımlar)
app.use(cors());
app.use(express.json()); // Gelen JSON verilerini okuyabilmemiz için

// Veritabanı Bağlantısı
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Odakflow Veritabanı Bağlandı 🚀'))
    .catch(err => console.log('Bağlantı Hatası:', err));

// Test Rotası
app.get('/', (req, res) => {
    res.send('Odakflow API çalışıyor...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda yayında. Hazırız!`);
});