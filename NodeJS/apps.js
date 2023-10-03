const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// Middleware to parse incoming file uploads
app.use(fileUpload());

// Serve a form to upload files (HTML form)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index_file.html');
});

// Handle file upload
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // Access the uploaded file
  const uploadedFile = req.files.uploadedFile;

  // Save the file to the server
  uploadedFile.mv(__dirname + '/uploads/' + uploadedFile.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
