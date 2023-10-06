const showPrincipalPage = (req, res) => {
    res.render('about_principal_read_more', {
        title: "Principal information"
    });
}

module.exports = {
    showPrincipalPage
}