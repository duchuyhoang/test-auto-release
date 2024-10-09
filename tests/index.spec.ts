import { goi } from '../src';

describe('Test', () => {
  it('Return 1', async () => {
    expect(goi()).toBe(1);
  });

  it('Not To be 2', async () => {
    expect(goi()).not.toBe(2);
  });
});
