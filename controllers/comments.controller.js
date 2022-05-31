const mongoose = require("mongoose");
const Comment = require("../models/Comment");

module.exports.commentController = {
    postComment: (req, res) => {
        Comment.create ({
            writer: req.body.writer,
        }).then((data) => {
            res.json(data);
        });
    },

    deleteComment: (req, res) => {
        Comment.findByIdAndDelete (req.params.id)
        .then((data) => {
            res.json("Комментарий удален")
        });
    },

    patchComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, {
            writer: req.body.writer,
        }).then ((data) => {
            res.json(data);
        });

    },
    getComment: (req, res) => {
        Comment.find()
        .then((data) => res.json(data));
    },

}