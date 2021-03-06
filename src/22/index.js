import Router from 'koa-router';
import * as postCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);

const post = new Router(); // /api/post/:id
post.get('/', postCtrl.read);
post.delete('/', postCtrl.remove);
post.patch('/', postCtrl.update);

posts.use('/:id', postCtrl.checkObjectId, post.routes());

export default posts;
