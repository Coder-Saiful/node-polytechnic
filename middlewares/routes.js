const homeRouter = require('../routers/homeRouter');
const aboutRouter = require('../routers/aboutRouter');
const contactRouter = require('../routers/contactRouter');
const departmentsRouter = require('../routers/departmentsRouter');
const galleryRouter = require('../routers/galleryRouter');
const newsdetailsRouter = require('../routers/newsdetailsRouter');
const newsRouter = require('../routers/newsRouter');
const noticeRouter = require('../routers/noticeRouter');
const principalAboutRouter = require('../routers/principalAboutRouter');

module.exports = (app) => {
    app.use('/', homeRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/departments', departmentsRouter);
    app.use('/gallery', galleryRouter);
    app.use('/news', newsRouter);
    app.use('/news/:id', newsdetailsRouter);
    app.use('/newsdetails', newsdetailsRouter);
    app.use('/principal-info', principalAboutRouter);
    app.use('/notices', noticeRouter);
}