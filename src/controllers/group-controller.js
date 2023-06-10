

exports.createGroup = async (req, res, next) => {

   //const value = req.body
    console.log(req.body)
    res.status(200).json({ message: "Hello from createGroup controller", userId:  req.user, response: req.body  });


    
}

 exports.getAllGroup = async (req, res, next) => {
   
    console.log(req.body)
    res.status(200).json({ message: "Hello from getAllGroup controller", groupList:  "Group 1 2 3 4"});

 }

 exports.getGroupById = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({ message: "Hello from getGroupByIdr controller", groupId:  1 });

 }

 exports.deleteGroupById = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({ message: "Hello from deleteGroupById controller", deleteGroupId:  1 });

 }