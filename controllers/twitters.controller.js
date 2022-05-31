const mongoose = require("mongoose");
const Twitter = require("../models/Twitter");

module.exports.twitterController = { 
    postTwitter: (req, res) => {
        Twitter.create ({
            name: req.params.name,
            save: req.body.save,
            like: req.body.like,
        }).then((data) => {
            res.json(data);
        });
    },
    deleteTwitter: (req, res) => {
        Twitter.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.json("Пост удален");
        });
    },

    patchTwitter: (req, res) => {
        Twitter.findByIdAndUpdate(req.params.id, {$set: {
            name: req.body.name,
            save: req.body.save,
            like: req.body.like,
        }}).then((data) => {
            res.json(data);
        });
    },

    getTwitter: (req, res) => {
        Twitter.find()
        .populate("user")
        .populate("user")
    },


}