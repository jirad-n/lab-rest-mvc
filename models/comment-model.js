const pool = require("./pool");

const createComment = async (postId, commenter, comment) => {
  const sql = `
        INSERT INTO comments (post_id, commenter, comment, updated_at) VALUES (?,?,?,?)
    `;
  await pool.execute(sql, [postId, commenter, comment, new Date()]);
};

module.exports = {
  createComment,
};
