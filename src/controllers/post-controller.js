const { Post, User } = require('../models');

exports.createPost = async (req, res, next) => {
try {

    const value = req.body;
    value.userId = req.user.id;   

   // const userId= req.user
    //console.log(user.id)
    console.log(value)

    const postValue = await Post.create(value);
    console.log(postValue);
    res.status(200).json("Create Post success");

    // const postValue = await Post.create(req.body);
    // console.log(postValue);
    // res.status(200).json("Create menu success");



    res.status(200).json({message: "Hello from creatPost controller"})
} catch(err) {
    next(err);
   }
}





exports.getPostById = async (req, res, next) => {

    const postTopicById = await Post.findOne({
        where: { id: req.params.postid }
        // attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
      });
    
      res.status(200).json({ postTopicById });
    
    // console.log(req.body)
    // res.status(200).json({message: "Hello from getPostByIdt controller"})
}

exports.getAllPost = async (req, res, next) => {


    // const allPost = await Post.findAll();
    const allPost = await Post.findAll({
        order: [
          ["updatedAt", "DESC"],
        ]})
    res.status(200).json({ allPost });

// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));


    // console.log(req.body)
    // res.status(200).json({message: "Hello from getAllPost controller"})
}


exports.editPostbyId = async (req, res, next) => {
   // const value = req.body
    const updatePost = req.body;
    await Post.update(updatePost, { where: { id: req.params.postid } });
    res.status(200).json(updatePost);

    // console.log(req.body)
    // res.status(200).json({message: "Hello from editPostbyId  controller"})
}


// will delete comment effected
exports.deletePostById = async (req, res, next) => {

    await Post.destroy({ where: { id: req.params.postid } });
    res.status(200).json({ message: 'Deleted success' });

    // console.log(req.body)
    // res.status(200).json({message: "Hello from deletePostById controller"})
}



