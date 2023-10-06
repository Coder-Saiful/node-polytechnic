const showContactPage = (req, res) => {
    res.render('contact', {
        title: "Contact page"
    });
}

module.exports = {
    showContactPage
}