module.exports = (req, res) => {
    res.status(404).json({ message: ' resource not found on this server'})
}




//Global module
// ภาพรวมการทำงานคือ สร้าง Response กลับ กรณีเรียก path ที่ไม่มีอยู่ ในรูปแบบ Json obj 
//ส่ง module นี้ไป ให้ app.js เรียกใช้ 

//ตัวอย่างการเรียกใช้ 
// curl http://localhost:8888/xxxxx

//ตัวอย่าง Response

// {
//     message: " resource not found on this server"
//     }