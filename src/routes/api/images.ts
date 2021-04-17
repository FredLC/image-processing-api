import express from 'express';
import { promises as fsPromises } from 'fs';
const sharp = require('sharp');

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const imagePath = `./src/images/${filename}.jpg`;
  const jpegImage = await sharp(imagePath).jpeg({ mozjpeg: true }).toBuffer();
  const resizedImage = await sharp(jpegImage)
    .resize(width, height)
    .toFormat('jpeg')
    .toBuffer();
  await fsPromises.writeFile(
    `./src/images/${filename}-thumb.jpeg`,
    resizedImage
  );
  try {
    const thumbImage = await fsPromises.readFile(
      `./src/images/${filename}-thumb.jpeg`,
      'base64'
    );
    const imageUrl = `data:image/jpeg;base64,${thumbImage}`;
    res.send(`<img src=${imageUrl}>`);
  } catch (err) {
    if (err) {
      res.send(
        'There was an error processing your image. Please double check the name of your file.'
      );
    }
  }
});

export default images;
