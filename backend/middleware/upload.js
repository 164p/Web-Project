import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/gapst/Downloads/KMUTT2-2/WEBPROGRAMMING/React Project/frontend/src/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
});  

let upload = multer({ 
    storage: storage,
     limits : {fileSize : 3000000
    }});

export default uploads