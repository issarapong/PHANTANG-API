// IMPORT buildin and third paty Library
require('dotenv').config();
const express = require('express')
const app = express();
const morgan = require('morgan')

//IMPORT CustomModule From /routes

const authRoute = require('./routes/auth-route')

//IMPORT Custom Module From /middlewares
const notFoudMiddlewares = require('./middlewares/not-found')
const errorMiddlewares = require('./middlewares/error')

//Declare variable for morgan
const devenv = process.env.NODE_ENV

//Check header log with morgan
if(devenv === 'development') {
    app.use(morgan('combined'))
}


app.use(express.json()) // แปลง String to json obj / ถ้าไม่ใช้ req.body จะ undefiend  ตัวยอย่างเรียกใช้ใน /src/controllers/auth-controller.js


// รับ request ที่เกี่ยวกับเรื่อง auth  login/register แล้วทำงานร่วมกับ /routes/auth-route.js
app.use('/auth', authRoute)



// Error and Notfound Middlewares
app.use(errorMiddlewares)
app.use(notFoudMiddlewares)


//Config Enviroment Log Console
const port = process.env.PORT || 8000
const dbname = process.env.DB_NAME
app.listen(port, () => 
console.log(`Server running port: ${port}\nRunning Enviroment: ${devenv}\nDatabase ${dbname} `))