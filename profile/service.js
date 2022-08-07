const dao = require("./dao");
module.exports = (app) => {
  const findAllProfile = (req, res) =>
      dao.findAllProfile().then((profile) => res.json(profile));
  app.get("/profile", findAllProfile);

  const findProfileById = (req, res) =>
      dao.findProfileById(req.params.id).then((profile) => res.json(profile));
  app.get("/profile/:id", findProfileById);

  const deleteProfile = (req, res) =>
      dao.deleteProfile(req.params.id).then((status) => res.send(status));
  app.delete("/profile/:id", deleteProfile);

  const createProfile = (req, res) => {
    dao
    .createProfile(req.body)
    .then((insertedProfile) => res.json(insertedProfile));
  };
  app.post("/profile", createProfile);

  const updateProfile = (req, res) => {
    const editProfile = req.body;
    dao
    .updateProfile(req.params.id, editProfile)
    .then((status) => res.send(status));
  };
  app.put("/profile/:id", updateProfile);

  const handleFilm = (req, res) => {
    const updateProfile = req.body;
    dao
    .handleFilm(req.params.id, updateProfile)
    .then((status) => res.send(status));
  };
  app.put("/profile/:id/movie", handleFilm);

  const handleFollower = (req, res) => {
    const updateProfile = req.body;
    dao
    .handleFollower(req.params.id, updateProfile)
    .then((status) => res.send(status));
  };
  app.put("/profile/:id/follower", handleFollower);

  const handleFollowing = (req, res) => {
    const updateProfile = req.body;
    dao
    .handleFollowing(req.params.id, updateProfile)
    .then((status) => res.send(status));
  };
  app.put("/profile/:id/following", handleFollowing);


  const handleChat = (req, res) => {
    const updateProfile = req.body;
    dao
    .handleChat(req.params.id, updateProfile)
    .then((status) => res.send(status));
  };
  app.put("/profile/:id/chat", handleChat);
};