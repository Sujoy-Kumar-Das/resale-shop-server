const express = require("express");
const { productsCatagoryCollection } = require("../../models/dataBase/DBConnect");
const router = express.Router();
// test server
router.get("/products/catagorys", async(req,res)=>{
    try {
        const query = {};
        const result = await productsCatagoryCollection.find(query).toArray()
        if(result.length){
            res.status(200).send({
                success:true,
                productsCatagory:result
            })
        }
        res.status(404).send({
            success:false,
            message:"Data not found"
        })
    } catch (error) {
        console.log(error)
    }
});
module.exports=router;