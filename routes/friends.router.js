const express = require("express");

const {
    postFriend,
    getFriends,
    getFriendById,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();
friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getFriendById);
friendsRouter.post("/", postFriend);

module.exports = friendsRouter;
