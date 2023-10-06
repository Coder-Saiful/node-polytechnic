const showNoticePage = (req, res) => {
    res.render('notices', {
        title: "See all notices"
    });
}

module.exports = {
    showNoticePage
}