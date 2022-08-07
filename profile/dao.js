const model = require("./model");

const findAllProfile = () => model.find();

const findProfileById = (id) => model.findById(id);

const deleteProfile = (id) => model.deleteOne({ _id: id });

const createProfile = (profile) => model.create(profile);

const updateProfile = (id, profile) =>
    model.updateOne({ _id: id }, { $set: profile });

const handleFilm = (id, profile) =>
    model.updateOne({ _id: id }, { $set: profile });

const handleFollower = (id, profile) =>
    model.updateOne({ _id: id }, { $set: profile });

const handleFollowing = (id, profile) =>
    model.updateOne({ _id: id }, { $set: profile });

const handleChat = (id, profile) =>
    model.updateOne({ _id: id }, { $set: profile });

module.exports = {
  findAllProfile,
  findProfileById,
  deleteProfile,
  createProfile,
  updateProfile,
  handleFilm,
  handleFollower,
  handleFollowing,
  handleChat,
};
