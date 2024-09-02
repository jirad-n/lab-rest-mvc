const postModel = require("./post-model");

// postModel.createTablePost();
// postModel.createPost("Jonathan", "First Post", "I have created a new post.");
// postModel.deletePost(3);
postModel.getAllPost().then((result) => console.log(result));
