const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const admin = require('firebase-admin');
admin.initializeApp();
const gcs = new Storage();
const path = require('path');
const os = require('os');
const fs = require('fs');
const sharp = require('sharp');

const compressionRuntimeOpts = {
  memory: '1GB',
};

// Image compression

exports.compressImage = functions
  .runWith(compressionRuntimeOpts)
  .storage.object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const bucket = gcs.bucket(fileBucket); // Overall bucket
    const filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.
    let partPath = '';
    let subSection = '';

    console.log(filePath);

    if (filePath.includes('HeroImages/')) {
      return console.log(`Can't handle hero images`);
    }

    if (filePath.includes('engineering')) {
      partPath = 'engineering-images';
    } else if (filePath.includes('uav')) {
      partPath = 'uav-images';
    } else if (filePath.includes('modelling')) {
      partPath = 'modelling-images';
    } else if (filePath.includes('printing')) {
      partPath = 'printing-images';
    }

    if (filePath.includes('cnc-tools')) {
      // Elektronikos inžinerijos dalis
      subSection = 'cnc-tools/';
    } else if (filePath.includes('laser')) {
      subSection = 'laser/';
    } else if (filePath.includes('electronic-cutter')) {
      subSection = 'electronic-cutter/';
    } else if (filePath.includes('mechanic-toys')) {
      subSection = 'mechanic-toys/';
    } else if (filePath.includes('toys')) {
      // Modeliavimo dalis
      subSection = 'toys/';
    } else if (filePath.includes('furniture')) {
      subSection = 'furniture/';
    } else if (filePath.includes('drones')) {
      // Bepiločių orlaivių dalis
      subSection = 'drones/';
    } else if (filePath.includes('rc-plane')) {
      subSection = 'rc-plane/';
    } else if (filePath.includes('glider')) {
      subSection = 'glider/';
    }

    console.log(subSection);

    const fileName = path.basename(filePath);

    if (!contentType.startsWith('image/')) {
      return console.log('Not an image.');
    }

    if (fileName.startsWith('min_')) {
      // Checking, if maybe we uploading already minimized image. Firebase functions sometimes calls more times that it have to, so we are preventing that the minimized image won't be duplicated.
      return console.log('Already minimized.');
    }

    const tempFilePath = path.join(os.tmpdir(), fileName);
    console.log('Created temporary path', tempFilePath);
    const metadata = {
      contentType: contentType,
    };
    await bucket.file(filePath).download({ destination: tempFilePath }); // Downloading a file from current filePath to that temporary path.
    console.log('Image downloaded locally to', tempFilePath);

    for (var i = 0; i < 2; i++) {
      const newFileName = `min_${fileName}`; // Renaming an uploaded file;
      const newFileTemp = path.join(os.tmpdir(), newFileName); // Again, creating a new temporary path to upload file with that new name.
      const destFilePathBig = `minimized/${partPath}/${subSection}Big/${newFileName}`;
      const destFilePathSmall = `minimized/${partPath}/${subSection}Small/${newFileName}`;

      if (i == 0) {
        await sharp(tempFilePath)
          .resize(1920, 1080, {
            fit: 'fill',
          })
          .jpeg({
            quality: 70,
            chromaSubsampling: '4:4:4',
          })
          .toFile(newFileTemp);

        await bucket.upload(newFileTemp, {
          destination: destFilePathBig,
          metadata: metadata,
        });
      } else if (i == 1) {
        await sharp(tempFilePath)
          .resize(848, 480, {
            fit: 'fill',
          })
          .jpeg({
            quality: 55,
            chromaSubsampling: '4:4:4',
          })
          .toFile(newFileTemp);

        await bucket.upload(newFileTemp, {
          destination: destFilePathSmall,
          metadata: metadata,
        });
      }
    }

    await bucket.file(filePath).delete();

    return fs.unlinkSync(tempFilePath);
  });

// Hero image compression

exports.compressHeroImage = functions
  .runWith(compressionRuntimeOpts)
  .storage.object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const bucket = gcs.bucket(fileBucket); // Overall bucket
    const filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.

    if (!contentType.startsWith('image/')) {
      return console.log('Not an image.');
    }

    if (!filePath.includes('HeroImages/')) {
      return console.log('Not a hero image.');
    }

    const fileName = path.basename(filePath);

    if (fileName.startsWith('min_')) {
      // Checking, if maybe we uploading already minimized image. Firebase functions sometimes calls more times that it have to, so we are preventing that the minimized image won't be duplicated.
      return console.log('Hero image is already minimized.');
    }

    const tempFilePath = path.join(os.tmpdir(), fileName);
    console.log('Created temporary path', tempFilePath);
    const metadata = {
      contentType: contentType,
    };
    await bucket.file(filePath).download({ destination: tempFilePath }); // Downloading a file from current filePath to that temporary path.
    console.log('Image downloaded locally to', tempFilePath);

    for (var i = 0; i < 3; i++) {
      const newFileName = `min_${fileName}`; // Renaming an uploaded file;
      const newFileTemp = path.join(os.tmpdir(), newFileName); // Again, creating a new temporary path to upload file with that new name.
      const destFilePathBig = `minimized/HeroImages/Big/${newFileName}`;
      const destFilePathSmall = `minimized/HeroImages/Small/${newFileName}`;
      const destFilePathSmallest = `minimized/HeroImages/Smallest/${newFileName}`;

      if (i == 0) {
        await sharp(tempFilePath)
          .resize(1920, 1080)
          .jpeg({
            quality: 75,
            chromaSubsampling: '4:4:4',
          })
          .toFile(newFileTemp);

        await bucket.upload(newFileTemp, {
          destination: destFilePathBig,
          metadata: metadata,
        });
      } else if (i == 1) {
        await sharp(tempFilePath)
          .resize(1600, 900)
          .jpeg({
            quality: 60,
            chromaSubsampling: '4:4:4',
          })
          .toFile(newFileTemp);

        await bucket.upload(newFileTemp, {
          destination: destFilePathSmall,
          metadata: metadata,
        });
      } else if (i == 2) {
        await sharp(tempFilePath)
          .resize(960, 540)
          .jpeg({
            quality: 55,
            chromaSubsampling: '4:4:4',
          })
          .toFile(newFileTemp);

        await bucket.upload(newFileTemp, {
          destination: destFilePathSmallest,
          metadata: metadata,
        });
      }
    }

    await bucket.file(filePath).delete();

    return fs.unlinkSync(tempFilePath);
  });

exports.compressVideo = functions.storage
  .object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.

    const fileName = path.basename(filePath);

    if (!contentType.startsWith('video/')) {
      return console.log('Not a video.');
    }

    if (fileName.startsWith('min_')) {
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

    const thumbFileName = `min_${fileName}`;
    const thumbFileTemp = path.join(os.tmpdir(), thumbFileName);
    const thumbFilePath = `minimized/${thumbFileName}`;
    console.log('Created thumb path', thumbFilePath);
    console.log('Created thumbFileTemp: ', thumbFileTemp);

    await bucket.upload(tempFilePath, {
      destination: thumbFilePath,
      metadata: metadata,
    });
    await bucket.file(filePath).delete();

    return fs.unlinkSync(tempFilePath);
  });
