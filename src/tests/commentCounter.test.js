import commentCounter from '../modules/commentCounter.js';

describe('Test comment counter', () => {
  test('comment counter with null', () => {
    expect(commentCounter(null)).toBe(0);
  });

  test('comment counter with undefined', () => {
    expect(commentCounter(undefined)).toBe(0);
  });

  test('comment counter with empty object', () => {
    expect(commentCounter([])).toBe(0);
  });

  test('comment counter with object', () => {
    expect(
      commentCounter([{ username: 'Bilal', comment: 'Tasty', id: '1234' }]),
    ).toBe(1);
  });
});
