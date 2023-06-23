const {Group, Usergroup, Usergrouprole  } = require("../models/group");


exports.createGroup = async (req, res, next) => {

   //const value = req.body
   // const value = {
   //    userId: req.user.id
   //  };
   //  console.log(value)
   //  console.log(req.body)


   //  const newGroup = await Group.create(value);
//     const post = await Post.findOne({
//       where: { id: newPost.id },
//       include: User
//     });

//     res.status(201).json({ post });
//   } catch (err) {
//     next(err);
//   } finally {
//     if (req.file) {
//       fs.unlinkSync(req.file.path);
//     }
//   }
// };




    
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

 exports.editGroupById = async (req, res, next) => {

   console.log(req.body)
   res.status(200).json({ message: "Hello from editGroupById controller", groupId:  1 });

}


 exports.deleteGroupById = async (req, res, next) => {

    console.log(req.body)
    res.status(200).json({ message: "Hello from deleteGroupById controller", deleteGroupId:  1 });

 }