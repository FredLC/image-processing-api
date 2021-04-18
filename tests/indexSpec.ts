import supertest from 'supertest';
import resizeImage from '../src/utilities/image-processing';
import app from '../src/index';

const request = supertest(app);

describe('Test api endpoints', () => {
  it('should get the main api endpoint with a status of 200', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=400&height=600'
    );
    expect(response.status).toBe(200);
  });

  it('should generate a 404 status code when accessing /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(404);
  });

  it('should send an error message when user input is invalid', async () => {
    const response = await request.get(
      '/api/images?filename=asdf&width=400&height=600'
    );
    expect(response.text).toContain('There was an error');
  });
});

describe('Test image processing', () => {
  it('should resize an image and return a url string when given valid parameters', async () => {
    const url = await resizeImage('fjord', 200, 200);
    expect((url as unknown) as string).toContain('data:image/jpeg;base64');
  });
});
