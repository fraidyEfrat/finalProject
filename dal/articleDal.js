const db = require('../models/index')
const Article = db.article

// @desc Get all articls
// @route GET /aricle
// @access Private
//eeeeeeeeeeeeeeeee
class ArticlesDataAccessor {

getAllArticlesDal = async () => {
    const res = await Article.findAll({});
    return res;

}

addNewArticleDal = async (req, res) => {
    res=await Article.create(req);
    return res; 
}

updateArticleByIdDal = async (data, id) => {
    
    const res = await Article.update(data, { where: { idarticle: id } })
    return res
}


deleteArticleByIdDal = async (idarticle) => {
    await Article.destroy({
        where: {
            idarticle: idarticle
        }
    });
}
getArticleByIdDal=async(idarticle)=>{
    let res=await Article.findOne({where:{idarticle:idarticle}})
    return res
}
}

const articlesDataAccessor= new ArticlesDataAccessor();
module.exports = articlesDataAccessor
