const responseArticleDal = require("../dal/responseArticleDal")
const ResponseArticle = require("../models/responseArticle");



const getAllResponseArticles = async (req, res) => {

    const responseArticle = await responseArticleDal.getAllResponseArticlesDal();
    if (!responseArticle?.length) {
        return res.status(400).json({ message: 'No responseArticle found' })
    }
    return res.json(responseArticle);
}
const addNewResponseArticle = async (req, res) => {
    const { date, content, idarticle, iduser } = req.body
    console.log(req.body);

    if (!idarticle) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const responseArticle = await responseArticleDal.addNewResponseArticleDal({ date, content, idarticle, iduser })
    if (responseArticle) {
        return res.status(201).json({ message: 'New responseArticle created' })
    } else {
        return res.status(400).json({
            message: 'Invalid responseArticle data received'
        })
    }
}
const updateResponseArticleById = async (req, res) => {
    const { idresponse, date, content, idarticle, iduser } = req.body

    if (!idresponse) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const responseArticle = await responseArticleDal.updateResponseArticleByIdDal({ date, content, idarticle, iduser }, idresponse)
    if (!responseArticle) {
        return res.status(400).json({ message: 'responseArticle not found' })
    }
    res.json(responseArticle)
}
const deleteresponseArticleById = async (req, res) => {
    const  idresponse  = req.params.idresponse

    if (!idresponse) {
        return res.status(400).json({ message: 'responseArticle ID required' })
    }
    await responseArticleDal.deleteresponseArticleByIdDal(idresponse);
    res.json(`responseArticle with ID ${idresponse} deleted`)
}

module.exports = {
    getAllResponseArticles,
    addNewResponseArticle,
    updateResponseArticleById,
    deleteresponseArticleById,
}