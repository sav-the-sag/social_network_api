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

}