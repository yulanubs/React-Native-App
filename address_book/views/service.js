var Service = {
  host:'http://127.0.0.1:3000',
  login: '/user/login',
  loginByToken: '/user/login/token',
  getUser: '/user/get',
  createUser: '/user/create',
  getMessage: '/message/get',
  updatePassword: '/user/password/update',
  deleteUser: '/user/delete'
};

module.exports = Service;