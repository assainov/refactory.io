import request from 'supertest';
import { router } from '../../server';

describe('home route', () => {
  it('should return status 200', async () => {
    const response = await request(router).get('/');

    expect(response.status).toBe(200);
  });
});
