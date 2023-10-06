const showDepartmentsPage = (req, res) => {
    res.render('departments', {
        title: "Department page"
    });
}

module.exports = {
    showDepartmentsPage
}