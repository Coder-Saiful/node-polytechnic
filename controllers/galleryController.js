const showGalleryPage = (req, res) => {
    res.render('gallery', {
        title: "Our gallery"
    });
}

module.exports = {
    showGalleryPage
}