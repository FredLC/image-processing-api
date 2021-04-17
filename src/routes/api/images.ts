import express from 'express';
import resizeImage from '../../utilities/image-processing';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  let url: string = '';
  if (url === '') {
    try {
      url = await resizeImage(filename, width, height);
      res.send(`<img src=${url}>`);
    } catch (err) {
      res.send(
        'There was an error processing your image. Please double check the name of your file.'
      );
    }
  }
});

export default images;
