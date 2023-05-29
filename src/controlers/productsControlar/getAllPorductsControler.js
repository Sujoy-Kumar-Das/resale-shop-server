const { allProductsColection } = require("../../models/dataBase/DBConnect");

 const getAllProductsControler = async(req,res)=>{
    try {
        const id = req.params.id;
        const query = {product_id:id}
        const result = await allProductsColection.find(query).toArray()
        if(result.length){
            res.send({
                success:true,
                products:result
            })
        }
        else{
            res.send({
                success:false,
                products:[]
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports=getAllProductsControler;