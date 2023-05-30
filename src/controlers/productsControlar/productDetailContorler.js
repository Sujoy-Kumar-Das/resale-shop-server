const { allProductsColection } = require("../../models/dataBase/DBConnect");
const { ObjectId } = require("mongodb");
const productDetailControler = async(req,res)=>{
    try {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await allProductsColection.findOne(query)
        res.send({
            success:true,
            productDetail:result
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= productDetailControler