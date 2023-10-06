const showdetailsPage = (req, res) => {
    res.render('news_details', {
        title: "News details"
    });
}

module.exports = {
    showdetailsPage
}