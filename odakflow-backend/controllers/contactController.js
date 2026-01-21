// const Contact = require('../models/Contact');

// exports.submitMessage = async (req, res) => {
//     try {
//         const newMessage = await Contact.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: 'Mesajınız Odakflow ekibine ulaştı. Teşekkürler!',
//             data: newMessage
//         });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// //    Tüm mesajları getir (GET) - Admin panelinde kullanacağız
// exports.getMessages = async (req, res, next) => {
//     try {
//         const messages = await Contact.find().sort({ createdAt: -1 }); // En yeni mesaj en üstte
//         res.status(200).json({
//             success: true,
//             count: messages.length,
//             data: messages
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// //    Mesajı sil (DELETE)
// exports.deleteMessage = async (req, res, next) => {
//     try {
//         const message = await Contact.findByIdAndDelete(req.params.id);
//         if (!message) {
//             return res.status(404).json({ success: false, error: 'Mesaj bulunamadı' });
//         }
//         res.status(200).json({ success: true, data: {} });
//     } catch (error) {
//         next(error);
//     }
// };

// //    Mesaj durumunu güncelle (Okundu/Okunmadı) (PUT)
// exports.updateMessageStatus = async (req, res, next) => {
//     try {
//         const message = await Contact.findByIdAndUpdate(
//             req.params.id, 
//             { isRead: true }, 
//             { new: true }
//         );
//         res.status(200).json({ success: true, data: message });
//     } catch (error) {
//         next(error);
//     }
// };

//! Refactoring

const Contact = require('../models/Contact');
const asyncHandler = require('../middlewares/asyncHandler');

// desc->    Mesaj gönder
exports.submitMessage = asyncHandler(async (req, res, next) => {
    const newMessage = await Contact.create(req.body);
    res.status(201).json({
        success: true,
        message: 'Mesajınız Odakflow ekibine ulaştı.',
        data: newMessage
    });
});

// desc->    Tüm mesajları getir
exports.getMessages = asyncHandler(async (req, res, next) => {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        count: messages.length,
        data: messages
    });
});

// desc->    Mesajı sil
exports.deleteMessage = asyncHandler(async (req, res, next) => {
    const message = await Contact.findByIdAndDelete(req.params.id);
    
    if (!message) {
        res.status(404);
        throw new Error('Mesaj bulunamadı');
    }

    res.status(200).json({ success: true, data: {} });
});

// desc->    Mesajı okundu işaretle
exports.updateMessageStatus = asyncHandler(async (req, res, next) => {
    const message = await Contact.findByIdAndUpdate(
        req.params.id,
        { isRead: true },
        { new: true, runValidators: true }
    );

    if (!message) {
        res.status(404);
        throw new Error('Mesaj bulunamadı');
    }

    res.status(200).json({ success: true, data: message });
});