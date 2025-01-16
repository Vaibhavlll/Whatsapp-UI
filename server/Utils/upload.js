const multer = require("multer");
require("dotenv").config()


// The below args are based upon gridfss storage
const { GridFsStorage }  = require('multer-gridfs-storage');
const storage =  new GridFsStorage({
    url: process.env.MONGO_URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});



module.exports =  multer({ storage: storage });