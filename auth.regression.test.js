const { login } = require('./auth');

describe('Regression Test - Extended Cases', () => {
  test('Sai mật khẩu phải trả về false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Username rỗng phải trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng phải trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Tài khoản sai hoàn toàn phải trả về false', () => {
    expect(login('hacker', '9999')).toBe(false);
  });
});
