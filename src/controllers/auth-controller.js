const userService = require('../services/user-service')

exports.register = async (req,res, next) => {
       try {
        //สิ่งที่ต้องเตรียมเบื้องต้นเพื่อให้ Register Module ทำงานได้สำเร็จ  ไปจนถึง Database
        // 1. src/services/user-service.js <- src/repositories/user-repository.js <- src/models/user.js

       // console.log(req.body); //
        const user = await userService.createUser(req.body)
        res.status(200).json({message: user })


       } catch(err) {
        next(err);
       }
} 





// exports.register คือ Module ที่ส่งให้ auth-route เรียกใช้เพื่อนำผลลัพธิ์ กลับไปให้ client ภายใน Module จะมีการประมวลผลต่างๆ ก่อนส่ง


// Module เปล่า ก่อนไส่ loggic

// exports.register = async (req,res, next) => {
//     try {
//      console.log("This is message from Resgister Module")

//        res.status(200).json({message: 'This is message from Resgister Module' })

//     } catch(err) {
//      next(err);
//     }
// } 
