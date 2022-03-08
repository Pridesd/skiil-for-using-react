const Router = require('koa-router');
const api = new Router();
const posts = require('./posts');

api.use('/posts', posts.routes());

//라우터 내보내기
module.exports = api;
