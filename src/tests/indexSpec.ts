import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test api endpoints', () => {
  it('should get the endpoint /api/images with a status of 200', async (done) => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    done();
  });
});
