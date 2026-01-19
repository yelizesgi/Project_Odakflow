const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hizmet adı zorunludur'],
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Hizmet açıklaması (SEO meta için) zorunludur']
    },
    content: {
        type: String, // Burada React tarafında zengin metin (HTML/Markdown) basabiliriz
        required: true
    },
    icon: {
        type: String, // MUI ikon ismi veya bir URL tutabiliriz
        default: 'Settings'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }); // createdAt ve updatedAt otomatik eklenir

module.exports = mongoose.model('Service', serviceSchema);