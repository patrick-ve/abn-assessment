import { describe, test, vi, expect } from 'vitest';

import { useFetchAllShows } from '@/composables/useFetchAllShows';

const fetchMock = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

vi.stubGlobal('$fetch', fetchMock);

describe('useFetchAllShows', () => {
  test('is a valid composable function', () => {
    expect(useFetchAllShows).toBeInstanceOf(Function);
  });

  test('returns a promise', () => {
    const result = useFetchAllShows();
    expect(result).toBeInstanceOf(Promise);
  });

  test('returns a promise that resolves to an array', () => {
    const result = useFetchAllShows();
    return result.then((data) => expect(data).toBeInstanceOf(Array));
  });

  test('returns a promise that resolves to an array of objects', () => {
    const result = useFetchAllShows();
    return result.then((data) => expect(data[0]).toBeInstanceOf(Object));
  });

  test('returns a promise that resolves to an array of objects with the correct keys', () => {
    const result = useFetchAllShows();
    return result.then((data) => expect(data[0]).toHaveProperty('name'));
  });
});
