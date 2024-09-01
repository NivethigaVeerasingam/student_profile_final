// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const bcrypt = require('bcrypt');
// const dotenv = require('dotenv');
// dotenv.config();

// const StudentModel = require('./models/Student');
// const UserModel = require('./models/Users.js');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/public', express.static('public'));

// // // Ensure public/Image directory exists
// // const imageDir = path.join(__dirname, 'public', 'Image');
// // if (!fs.existsSync(imageDir)) {
// //   fs.mkdirSync(imageDir, { recursive: true });
// // }

// // Image upload configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/Image');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // Environment variables
// const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://univetha166:nive2000@cluster0.dk4vaxh.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0";

// // Register endpoint
// app.post("/register", (req, res) => {
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       return res.json(err);
//     }
//     const newUser = { ...req.body, password: hash };
//     StudentModel.create(newUser)
//       .then(student => res.json(student))
//       .catch(err => res.json(err));
//   });
// });

// // Login endpoint
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   StudentModel.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (result) {
//             res.json("Success");
//           } else {
//             res.json("The password is incorrect");
//           }
//         });
//       } else {
//         res.json("No record existed");
//       }
//     });
// });

// // Image upload route
// app.post("/upload", upload.single('file'), (req, res) => {
//   try {
//     UserModel.create({ image: req.file.filename })
//       .then(result => res.json({ image: req.file.filename }))
//       .catch(err => console.log(err));
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all images route
// app.get('/getImage', async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     res.json(users);
//   } catch (err) {
//     console.error('Error fetching images:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Create user
// // app.post("/createUser", (req, res) => {
// //   UserModel.create(req.body)
// //     .then(users => res.json(users))
// //     .catch(err => res.json(err));
// // });


// // Create User
// app.post("/createUser", upload.single('image'), (req, res) => {
//   const newUser = new UserModel({
//       name: req.body.name,
//       // email: req.body.email,
//       ph_no: req.body.ph_no,
//       image: req.file ? req.file.filename : null
//   });
//   newUser.save()
//       .then(user => res.json(user))
//       .catch(err => res.json(err));
// });

// // View all users
// app.get("/getUser", (req, res) => {
//   UserModel.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// // View user by ID
// app.get('/getUser/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findById({ _id: id })
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Update user
// app.put('/updateUser/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndUpdate({ _id: id }, {
//     name: req.body.name,
//     ph_no: req.body.ph_no,
//     image: req.body.image
//   })
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Delete user
// app.delete('/deleteUser/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findByIdAndDelete({ _id: id })
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     })
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// // Connect to MongoDB and start the server
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Connection failed!", error);
//   });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const StudentModel = require('./models/Student');
const UserModel = require('./models/Users.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Image upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Image');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://univetha166:nive2000@cluster0.dk4vaxh.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0";

// Register endpoint
app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json(err);
    }
    const newUser = { ...req.body, password: hash };
    StudentModel.create(newUser)
      .then(student => res.json(student))
      .catch(err => res.json(err));
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.json("Success");
          } else {
            res.json("The password is incorrect");
          }
        });
      } else {
        res.json("No record existed");
      }
    });
});

// Image upload route
app.post("/upload", upload.single('file'), (req, res) => {
  try {
    UserModel.create({ image: req.file.filename })
      .then(result => res.json({ image: req.file.filename }))
      .catch(err => console.log(err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users route
app.get('/getUser', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: err.message });
  }
});

// Create User
app.post("/createUser", upload.single('image'), (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    ph_no: req.body.ph_no,
    image: req.file ? req.file.filename : null
  });
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// View user by ID
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});
// Update User
app.put('/updateUser/:id', upload.single('image'), (req, res) => {
  const id = req.params.id;
  const updateData = {
      name: req.body.name,
      
      ph_no: req.body.ph_no,
  };
  if (req.file) {
      updateData.image = req.file.filename;
  }
  UserModel.findByIdAndUpdate(id, updateData, { new: true })
      .then(user => res.json(user))
      .catch(err => res.json(err));
});

// Delete user
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Connect to MongoDB and start the server
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
