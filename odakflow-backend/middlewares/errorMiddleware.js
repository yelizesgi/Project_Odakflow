const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Hatayı terminalde görmek için

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Sunucu Hatası',
        // Geliştirme modundaysak hatanın detayını (stack) göster, production'da gizle
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = errorHandler;