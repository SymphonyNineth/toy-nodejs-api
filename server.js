const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messeges.router");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

const PORT = 3000;

app.use((req, res, next) => {
    start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.baseUrl}${req.url}  ${req.method} ${delta}ms`);
});

// app.get("/", (req, res) => {
//     res.send("Hi");
// });
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.use("/site", express.static(path.join(__dirname, "public")));
app.use("/", (req, res) => {
    res.render("index", {
        title: "I'm amazing",
        caption: "The foo joke",
    });
});

app.listen(PORT, () => console.log(`Started on ${PORT}`));
