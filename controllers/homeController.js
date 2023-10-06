const showHomePage = (req, res) => {
    res.render('index', {
        title: "Polytechnic - Home page"
    });
}

module.exports = {
    showHomePage
}