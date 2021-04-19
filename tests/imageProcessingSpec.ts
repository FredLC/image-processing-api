import resizeImage from '../src/utilities/image-processing';

describe('Test image processing', () => {
  it('should resize an image and return a url string when given valid parameters', async () => {
    const url = await resizeImage('fjord', 200, 200);
    expect((url as unknown) as string).toContain('data:image/jpeg;base64');
  });
});
