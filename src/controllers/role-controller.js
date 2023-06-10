exports.assignRoleBygroupIduserId = async (req, res, next) =>{
console.log(req.body)
res.status(200).json({message: "Hello from assignRoleBygroupIduserId"  })

}

exports.changeRoleBygroupIduserId = async (req, res, next) =>{
    console.log(req.body)
    res.status(200).json({message: "Hello from changeRoleBygroupIduserId"  })
    
    }
    
exports.getRoleBygroupIdUserId = async (req, res, next) => {
    console.log(req.body)
    res.status(200).json({message: "Hello from getRoleBygroupIdUserId"  })
    
}    