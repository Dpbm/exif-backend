import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) { cb(null, 'tmp/') },
    filename: function (req:any, file:any, cb:any) {
      const splittedName = file.originalname.split('.');
      const extension = splittedName[splittedName.length - 1];
      cb(null,  `${Date.now()}.${extension}`);
    },
});