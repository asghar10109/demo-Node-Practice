
const express = require('express')
const app = express()
 
const multer= require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, 'uploads');
        },
        filename: function (req, file, callback) {
            callback(null,file.fieldname+'-'+Date.now()+'.png');
        }
    })
    
}).single('user_file')

module.exports = upload
