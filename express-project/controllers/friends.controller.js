
import friends from '../models/friends.model.js';

function getAllFriends(req, res) {
    res.json(friends);
}



function getFriend(req, res) {

    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({ error: 'Friend does not exist' });
    }
}



function postFriend(req, res) {

    if (!req.body.name) {
        return res.status(400).json({ error: 'Missing friend name' });

    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.status(201).json(newFriend);
}

export { getAllFriends, getFriend, postFriend }
