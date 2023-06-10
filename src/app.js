// IMPORT buildin and third paty Library
require('dotenv').config();
const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
//IMPORT CustomModule  

//routes
const authRoute = require('./routes/auth-route')
//group
const groupRoute = require('./routes/group-route')
//Join
const joinRoute = require('./routes/join-route')
//Post
const postRoute = require('./routes/post-route')
//comment
const commentRoute = require('./routes/comment-route')
//role
const roleRoute = require('./routes/role-route')

//IMPORT Custom Module From /middlewares
const notFoudMiddlewares = require('./middlewares/not-found')
const errorMiddlewares = require('./middlewares/error')

//Declare variable for morgan
const devenv = process.env.NODE_ENV

//Check header log with morgan
if(devenv === 'development') {
    app.use(morgan('combined'))
}

app.use(cors())  // add cors for suuport frontend action

app.use(express.json()) // แปลง String to json obj / ถ้าไม่ใช้ req.body จะ undefiend  ตัวยอย่างเรียกใช้ใน /src/controllers/auth-controller.js


// รับ request ที่เกี่ยวกับเรื่อง auth  login/register แล้วทำงานร่วมกับ /routes/auth-route.js
app.use('/auth', authRoute)
app.use('/group', groupRoute)
app.use('/join', joinRoute)
app.use('/post', postRoute)
app.use('/comment', commentRoute)
app.use('/role', roleRoute)

// Error and Notfound Middlewares
app.use(errorMiddlewares)
app.use(notFoudMiddlewares)


//Config Enviroment Log Console
const port = process.env.PORT || 8000
const dbname = process.env.DB_NAME
app.listen(port, () => 
console.log(`Server running port: ${port}\nRunning Enviroment: ${devenv}\nDatabase ${dbname} `))