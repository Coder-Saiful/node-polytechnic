const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser')

module.exports = (app) => {
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
}