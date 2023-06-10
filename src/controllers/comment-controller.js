exports.createCommentByPostId = async (req, res, next) => {
   console.log(req.body)
   res.status(200).json({message: "Hello from CreateComment controller"})

}

exports.getAllCommentByPostId = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({message: "Hello from getAllCommentByPostId controller"})
 
 }

 exports.deleteCommentByCommentId = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from deleteCommentByCommentId controller"})

 }