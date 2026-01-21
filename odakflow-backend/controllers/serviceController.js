// const Service = require('../models/Service');

// // @desc    Tüm hizmetleri getir
// // @route   GET /api/services
// exports.getServices = async (req, res) => {
//     try {
//         const services = await Service.find({ isActive: true });
//         res.status(200).json({
//             success: true,
//             count: services.length,
//             data: services
//         });
//     } catch (error) {
//         res.status(500).json({ success: false, error: 'Sunucu Hatası' });
//     }
// };

// // @desc    Yeni hizmet ekle (Admin panelinden kullanacağız)
// // @route   POST /api/services
// exports.createService = async (req, res) => {
//     try {
//         const service = await Service.create(req.body);
//         res.status(201).json({
//             success: true,
//             data: service
//         });
//     } catch (error) {
//         if (error.code === 11000) {
//             return res.status(400).json({ success: false, error: 'Bu slug zaten mevcut' });
//         }
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// // @desc    Slug'a göre tek bir hizmet getir (SEO dostu arama)
// // @route   GET /api/services/:slug
// exports.getServiceBySlug = async (req, res) => {
//     try {
//         const service = await Service.findOne({ slug: req.params.slug });
//         if (!service) {
//             return res.status(404).json({ success: false, error: 'Hizmet bulunamadı' });
//         }
//         res.status(200).json({ success: true, data: service });
//     } catch (error) {
//         res.status(500).json({ success: false, error: 'Sunucu Hatası' });
//     }
// };


//!Refactoring

const Service = require('../models/Service');
const asyncHandler = require('../middlewares/asyncHandler');

//  desc->  Tüm hizmetleri getir
//  route-> GET /api/services
exports.getServices = asyncHandler(async (req, res, next) => {
    const services = await Service.find({ isActive: true });
    res.status(200).json({
        success: true,
        count: services.length,
        data: services
    });
});

// desc->   Slug ile tekil hizmet getir
//  route-> GET /api/services/:slug
exports.getServiceBySlug = asyncHandler(async (req, res, next) => {
    const service = await Service.findOne({ slug: req.params.slug });

    if (!service) {
        res.status(404);
        throw new Error(`${req.params.slug} slug'ına sahip hizmet bulunamadı`);
    }

    res.status(200).json({
        success: true,
        data: service
    });
});

// desc->Yeni hizmet oluştur
// route->   POST /api/services
exports.createService = asyncHandler(async (req, res, next) => {
    const service = await Service.create(req.body);
    res.status(201).json({
        success: true,
        data: service
    });
});