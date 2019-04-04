import fetchData from '../src/js/http';
import getLevel from '../src/js/app';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check server call', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 80,
  });

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should return level', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 80,
  });

  expect(getLevel(1)).toBe('Ваш текущий уровень: 80');
});

test('check false status', () => {
  fetchData.mockReturnValue({ status: false });

  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
