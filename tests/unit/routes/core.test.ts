import { request } from 'supertest';
import app from '../../../src/app';
import { StatusCodes } from 'http-status-codes';

describe('GET /health', () => {
  test('responds with status 200 OK', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(StatusCodes.OK);
  });
});
