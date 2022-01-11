const path = require("path");

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, "..", "public", "imgs", "hanoi.jpg"));
    res.render("messages", { friend: "Arm" });
}

function postMessage(req, res) {
    res.json({ status: "success" });
}

module.exports = { getMessages, postMessage };
