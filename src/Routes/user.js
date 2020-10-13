const express = require("express");
const usersRouter = express.Router();

const userController = require("../Controllers/user");

const uploadImage = require("../Helpers/Middlewares/imgUpload");

usersRouter.get("/customer/:id", userController.showDetailCustomer);
usersRouter.get("/seller/:id", userController.showDetailSeller);

usersRouter.patch(
  "/customer/:id",
  uploadImage.singleUpload,
  userController.updateCustomer
);
usersRouter.patch(
  "/seller/:id",
  uploadImage.singleUpload,
  userController.updateSeller
);

module.exports = usersRouter;
