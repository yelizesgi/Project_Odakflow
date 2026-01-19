const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

// Yapılandırmayı yükle
dotenv.config();

// Veritabanına bağlan
connectDB();

const app = express();

// Rota Tanımları (Import)
const serviceRoutes = require('./routes/serviceRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Rotaları Kullan (Middleware)
app.use('/api/services', serviceRoutes);

// Temel Test Rotası
app.get('/', (req, res) => {
    res.json({ message: "Odakflow API'sine Hoş Geldiniz. Sistemler Aktif. 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`${process.env.NODE_ENV} modunda, sunucu ${PORT} portunda başladı.`);
});