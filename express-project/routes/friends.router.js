import express from 'express';
import { getAllFriends, getFriend, postFriend } from '../controllers/friends.controller.js';

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log(req.ip);
    next();
});
friendsRouter.post('/', postFriend);
friendsRouter.get('/:friendId', getFriend);
friendsRouter.get('/', getAllFriends);

export default friendsRouter;