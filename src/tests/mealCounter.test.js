import { countCategoryMeals } from '../modules/mealCounter.js';

describe('countCategoryMeals', () => {
  test('returns 0 when category is null', async () => {
    const result = await countCategoryMeals(null);
    expect(result).toBe(0);
  });

  test('returns 0 when category is undefined', async () => {
    const result = await countCategoryMeals(undefined);
    expect(result).toBe(0);
  });

  test('returns 0 when category is an empty string', async () => {
    const result = await countCategoryMeals('');
    expect(result).toBe(0);
  });

  test('returns 0 when category is not a string', async () => {
    const result = await countCategoryMeals(123);
    expect(result).toBe(0);
  });
});
