const showAboutPage = (req, res) => {
    res.render('about_us', {
        title: "About page"
    });
}

module.exports = {
    showAboutPage
}