const express = require('express')
const { annoteVideo } = require('../controller/annote.controller.js');

const annoteRouter = express.Router()

const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, '../Model/uploads');
    },
    filename: function (req, file, cb) {
       cb(null, Date.now() + '-' + file.originalname);
    }
});
var upload = multer({ storage: storage });

annoteRouter.post('/video', upload.single('video'), annoteVideo)

module.exports = {
    annoteRouter
}