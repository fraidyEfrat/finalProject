const db = require('../models/index')
const ResponseArticle = db.responseArticle

class ResponseArticleDataAccessor {

    getAllResponseArticlesDal = async () => {

        const res = await ResponseArticle.findAll({});
        return res;
    }
    addNewResponseArticleDal = async (req, res) => {
       
        res = await ResponseArticle.create(req);
        return res;
    }
        
    updateResponseArticleByIdDal = async (data,id) => {
       
        const res = await ResponseArticle.update(data, {where: { idresponse: id } })
        return res;
    }
    deleteresponseArticleByIdDal = async (id) => {
       
        await ResponseArticle.destroy({
            where: {
                idresponse: id
            }
        });
        
    }
}
const responseArticleDataAccessor= new ResponseArticleDataAccessor();
module.exports = responseArticleDataAccessor