const express = require("express");
const ArticleRouter=express.Router();

const articleController=require("../controllers/articleController");


ArticleRouter.route("/")
    .get(articleController.getAllArticles)
    .post(articleController.addNewArticle)
    .put(articleController.updateArticleById)
    .get(articleController.getArticesBySubject);

ArticleRouter.route("/:idarticle")
    .get(articleController.getArticleById)
    .delete(articleController.deleteArticleById);

ArticleRouter.route("/search")
    .get(articleController.getArticleBySearch)
// const articleRouter=new ArticleRouter();
module.exports=ArticleRouter;


