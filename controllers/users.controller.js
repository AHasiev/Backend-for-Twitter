const User = require("../models/User");

module.exports.userController = {
    postUser: (req, res) => {
        User.create ({
            name: req.body.name,
            description: req.body.description,
        }).then((data) => {
            res.json(data)
        })

    },

    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.json("Пользователь удален");
        });

    },
}