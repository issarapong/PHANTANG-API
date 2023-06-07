const express = require('express')

const authContoller = require('../controllers/auth-controller')

const router  = express.Router();

router.post('/register', authContoller.register)

module.exports =router




// auth-route.js ในส่วนนี้จะ เป็นตัวกลางระหว่า app.js ที่รับ request ประเภทต่างๆ เข้ามาแล้วส่งต่อไป ให้ auth-controller.js
// เรื่อง Register/login จะเป็น POST 
// ตัวอย่างการเรียกใช้ใน Postman  POST http://localhost:8888/auth/register