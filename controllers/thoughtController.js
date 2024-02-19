// imports
const { User, Thought } = require("../models");

// Get all thoughts
const thoughtController = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            return res.status(200).json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // get a single thought
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: "No thought with that ID" });
            }

            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};