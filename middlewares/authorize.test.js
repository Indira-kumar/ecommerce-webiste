import { authorizeAdmin, authorizeShopper } from './authorize.js';

describe('authorizeAdmin middleware', () => {
  test('should call next() if user is a admin', () => {
    const req = {
      user: {
        role: 'admin'
      }
    };
    const res = {
      send: jest.fn()
    };
    const next = jest.fn();

    authorizeAdmin(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test('should send "Authorization Denied because of no authorizeAdmin permission" if user is not a admin', () => {
    const req = {
      user: {
        role: 'shopper'
      }
    };
    const res = {
      send: jest.fn()
    };
    const next = jest.fn();

    authorizeAdmin(req, res, next);

    expect(res.send).toHaveBeenCalledWith('Authorization Denied because of no admin permission');
  });
});

describe('authorizeShopper middleware', () => {
  test('should call next() if user is a shopper', () => {
    const req = {
      user: {
        role: 'shopper'
      }
    };
    const res = {
      send: jest.fn()
    };
    const next = jest.fn();

    authorizeShopper(req, res, next);

    expect(next).toHaveBeenCalled();
  });
//Asumming that librarian should not be allowed to use authorizeShopper end points such as registering book, etc. this test case has been written
  test('should send "Authorization Denied" if user is not a authorized shopper', () => {
    const req = {
      user: {
        role: 'vendor'
      }
    };
    const res = {
      send: jest.fn()
    };
    const next = jest.fn();

    authorizeShopper(req, res, next);

    expect(res.send).toHaveBeenCalledWith('Authorization Denied');
  });
});
