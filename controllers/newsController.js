const showNewsPage = (req, res) => {
    res.render('news', {
        title: "See all news"
    });
}

module.exports = {
    showNewsPage
}