// export const getRegisters= async(req,res)=>{
// res.status(200).json({
//     message:"All data"
// });
// }
import Register from "../models/register.js";

export const postRegisters= async(req,res)=>{
    const register= await Register.create(req.body);
    res.status(200).json({
        register
    })
    }

export const getRegisters= async(req,res)=>{
    const data= await Register.find();
        res.status(200).json({
            data
        })
        }

        //http://localhost:4000/api/deleteregister/id
       
 export const deleteRegisters= async(req,res)=>{
            const product= await Register.findById(req.params.id);
                
            if(!product){
                return res.status(404).json({
                    success: false,
                    message: "product not found"
                });
            }
             // console.log(product)
              await product.deleteOne();

              res.status(200).json({
                success: true,
                message:"product deleted"
              })
        }


         //http://localhost:4000/api/updateregister/id
        export const updateRegisters= async(req,res)=>{
            let product = await Register.findById(req.params.id);
             
            if(!product){
                return res.status(404).json({
                    success: false,
                    message: "product not found"
                });
            }

            product= await Register.findByIdAndUpdate(req.params.id,req.body,{
                new: true,
                runValidators: true,
                useFindAndModify: false
            })

            res.status(200).json({
                success: true,
                product
              })

            }