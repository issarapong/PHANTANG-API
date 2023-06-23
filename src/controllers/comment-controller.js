const { Post, User, Comment } = require('../models');

exports.createCommentByPostId = async (req, res, next) => {
try{
   const value = req.body;
   value.userId = req.user.id;   
   value.postId  = req.params.postid;
  // const userId= req.user
   //console.log(user.id)
   console.log(value)
   console.log(req.params.postid)
    const commentValue = await Comment.create(value);
    console.log(commentValue);
    res.status(200).json("Create Post success");

   // const postValue = await Post.create(req.body);
   // console.log(postValue);
   // res.status(200).json("Create menu success");



   res.status(200).json({message: "Hello from createCommentByPostId controller"})
} catch(err) {
   next(err);
  }
}

exports.getAllCommentByPostId = async (req, res, next) => {

   const allCommentByPostId = await Comment.findAll({
      order: [
        ["updatedAt", "DESC"],
      ]})
  res.status(200).json({ allCommentByPostId });


    console.log(req.body)
    res.status(200).json({message: "Hello from getAllCommentByPostId controller"})
 
 }

 exports.deleteCommentByCommentId = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from deleteCommentByCommentId controller"})

 }