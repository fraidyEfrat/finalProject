const express = require("express");
const responseArticleRouter=express.Router();

const responseArticleController=require("../controllers/responseArticleController");
const verifyJWT = require("../middleware/verifyJWT")

responseArticleRouter.route("/")
    .get(verifyJWT,responseArticleController.getAllResponseArticles)
    .post(responseArticleController.addNewResponseArticle)
    .put(responseArticleController.updateResponseArticleById);

responseArticleRouter.route("/:idresponseArticle")
    .delete(responseArticleController.deleteresponseArticleById);


module.exports=responseArticleRouter;


