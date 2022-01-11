const model = require("../models/friends.model");

function postFriend(req, res) {
    if (!req.body.name) {
        res.status(400).json({
            error: "Missing friend name",
        });
        return;
    }
    const newFriend = {
        name: req.body.name,
        id: model.length,
    };
    model.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(model);
}

function getFriendById(req, res) {
    const id = Number(req.params.id);
    if (model[id]) {
        res.json(model[id]);
    } else {
        res.status(404).json({
            error: "Friend does not exist",
        });
    }
}

module.exports = { postFriend, getFriends, getFriendById };
