// imports
const { User, Thought } = require("../models");

// get all users
const userController = {
    async getUsers(req, res) {
        try {
            const users = await User.find()

                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" });

            return res.status(200).json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // get a single user
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" });

            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }

            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "No user with this id!" });
            }

            return res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            return res.status(200).json({
                message: "User and associated thoughts and reactions deleted!",
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
}