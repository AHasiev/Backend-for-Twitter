const { Router } = require("express");
const{ commentController } = require("../controllers/comments.controller");
const router = Router();

router.post("/comment", commentController.postComment);
router.patch("/comment/:id", commentController.patchComment);
router.delete("/comment/:id", commentController.deleteComment);
router.get("/comment", commentController.getComment);

module.exports = router;
