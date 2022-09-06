const request = require('supertest');
const app = require('../index.js');

const basePath = '/api/ipfs';

describe('Test IPFS endpoints', () => {
  test('hmmm', () => {
    expect(1).toBe(1);
  });

  //   test('It should response the GET method', async () => {
  //     const response = await request(app).get('/api/ipfs');
  //     expect(sresponse.statusCode).toBe(200);
  //   });

//   test('It should response the GET method', async () => {
//     const response = await request(app).get(
//       '/api/ipfs/ua-cde0a4171549fffb2f898b64e4e10ef6'
//     );
//     expect(response.statusCode).toBe(200);
//     done();
//   });
});
