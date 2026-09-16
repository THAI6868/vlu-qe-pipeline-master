const { login } = require('./auth');

describe('Smoke Test - Core Login Functionality', () => {
  test('Đăng nhập đúng (admin/123) phải trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
