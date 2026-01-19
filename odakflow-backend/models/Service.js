const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, // SEO Meta description için kullanılacak
    content: { type: String, required: true },    // Detaylı içerik
    slug: { type: String, required: true, unique: true }, // URL dostu isim
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);