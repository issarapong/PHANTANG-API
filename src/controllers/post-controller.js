exports.createPost = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from creatPost controller"})
}

exports.getPostById = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from getPostByIdt controller"})
}

exports.getAllPostByGroupId = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from getAllPostByGroupId controller"})
}


// will delete comment effected
exports.deletePostById = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({message: "Hello from deletePostById controller"})
}



