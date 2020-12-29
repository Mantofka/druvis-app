const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const gcs = new Storage();
const path = require('path');
const os = require('os');
const fs = require('fs');
const sharp = require('sharp');

exports.compressImage = functions.storage
  .object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.

    if (!contentType.startsWith('image/')) {
      return console.log('This is not an image.');
    }

    const fileName = path.basename(filePath);

    if (fileName.startsWith('thumb_')) {
      return console.log('Already a Thumbnail.');
    }

    const bucket = gcs.bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    console.log('Created temporary path', tempFilePath);
    const metadata = {
      contentType: contentType,
    };
    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log('Image downloaded locally to', tempFilePath);

    const size = [1920, 1080];

    const thumbFileName = `thumb_${fileName}`;
    const thumbFileTemp = path.join(os.tmpdir(), thumbFileName);
    const thumbFilePath = `thumbs/${thumbFileName}`;
    console.log('Created thumb path', tempFilePath);

    await sharp(tempFilePath)
    .jpeg({
      quality: 80,
      chromaSubsampling: '4:4:4'
    })
    .toFile(thumbFileTemp);

    await bucket.upload(thumbFileTemp, {
      destination: thumbFilePath,
      metadata: metadata,
    });

    return fs.unlinkSync(tempFilePath);
  });

/*
.jpeg({
  quality: 80,
  chromaSubsampling: '4:4:4'
})
.png({
  quality: 80,
})
    .resize(size[0], size[1])
*/
