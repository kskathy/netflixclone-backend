const model = require("./model");

const findAllChats = () => model.find();

const findChatsById = (id) => model.findById(id);

const deleteChat = (id) => model.deleteOne({ _id: id });

const createChat = (chat) => model.create(chat);

const updateChat = (id, chat) =>
    model.updateOne({ _id: id }, { $set: chat });

module.exports = {
  findAllChats,
  findChatsById,
  deleteChat,
  createChat,
  updateChat,
};
