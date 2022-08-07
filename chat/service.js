const dao = require("./dao");

module.exports = (app) => {
  const findAllChat = (req, res) =>
      dao.findAllChats().then((profile) => res.json(profile));
  app.get("/chat", findAllChat);

  const findChatById = (req, res) =>
      dao.findChatsById(req.params.id).then((chat) => res.json(chat));
  app.get("/chat/:id", findChatById);

  const deleteChat = (req, res) =>
      dao.deleteChat(req.params.id).then((status) => res.send(status));
  app.delete("/chat/:id", deleteChat);

  const createChat = (req, res) => {
    dao.createChat(req.body).then((insertedChat) => res.json(insertedChat));
  };
  app.post("/chat", createChat);

  const updateChat = (req, res) => {
    const updateChat = req.body;
    dao
    .updateChat(req.params.id, updateChat)
    .then((status) => res.send(status));
  };
  app.put("/chat/:id", updateChat);
};