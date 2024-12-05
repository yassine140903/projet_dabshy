const User = require("../models/userModel");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });


    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateMe = async (req, res) => {
  try {

    if (req.body.password || req.body.passwordConfirm) {
      return res.status(400).json({
        status: "fail",
        message:
          "This route is not for password updates. Please use /updateMyPassword.",
      });
    }

 
    const filteredBody = filterObj(req.body, "username", "email");
    if (req.file) filteredBody.profilePicture = req.file.filename;

  
    const updatedUser = await User.findById(req.user.id);
    updatedUser.username = filteredBody.username;
    updatedUser.email = filteredBody.email;
    await updatedUser.save({ validateModifiedOnly: true });
   
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
    console.log("User updated successfully");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { active: false }); 

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id).populate("posts");
    console.log(user.posts);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: "erore",
    });
  }
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
