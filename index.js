const express = require("express");
const postRouter = require("./routes/post-route");

const app = express();

app.use(express.json());

app.use("/posts", postRouter);

app.listen(8009, () => console.log("server running on port 8009"));
