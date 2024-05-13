// upload.ts
import multer from 'multer';
import moment from 'moment';

// Set up multer to store uploaded files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // Include the date in the filename
    const date = moment().format('YYYYMMDDHHmmss');
    cb(null, `${date}-${file.originalname}`);
  }
});

export const upload = multer({ storage: storage });