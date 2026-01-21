const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Lütfen adınızı belirtin'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'E-posta adresi zorunludur'],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Lütfen geçerli bir e-posta girin']
    },
    subject: {
        type: String,
        default: 'BT Hizmetleri Hakkında'
    },
    message: {
        type: String,
        required: [true, 'Mesaj alanı boş bırakılamaz']
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);