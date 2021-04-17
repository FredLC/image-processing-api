import { promises as fsPromises } from 'fs';
const sharp = require('sharp');

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
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
  const thumbImage = await fsPromises.readFile(
    `./src/images/${filename}-thumb.jpeg`,
    'base64'
  );
  const imageUrl = `data:image/jpeg;base64,${thumbImage}`;
  return imageUrl as string;
};

export default resizeImage;
