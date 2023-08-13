const { Router } = require("express");
const { createUser, loginUser, confirmEmail, uploadAvatar } = require("../controllers/users.controller");
const {
  loginUserValidator,
  registerUserValidator,
} = require("../validators/users.validators");
const authenticate = require("../middlewares/auth.middleware");
const hasRole = require('../middlewares/role.middleware');
const upload = require("../middlewares/upload.middleware");


const router = Router();

router.post("/users", registerUserValidator, createUser); //

router.post("/login", loginUserValidator, loginUser);

router.post("/users/confirm", confirmEmail);

router.put("/users",authenticate, upload.single('avatar'));

router
  .route("/users")
  .post(registerUserValidator, createUser)
  .put(upload.single("avatar"), uploadAvatar);

router.get('/confidencial', authenticate, hasRole('admin'), (req, res, next) => {
  res.send('esto es confidencial')
})

module.exports = router;
