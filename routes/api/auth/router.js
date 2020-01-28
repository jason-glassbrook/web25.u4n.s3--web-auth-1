/***********************************************************
  ~/auth - router
***********************************************************/

const { Router } = require ('./__needs')

const registerUser = require ('./registerUser')
const loginUser = require ('./loginUser')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/auth/register')
.post (registerUser)

router.route ('/auth/login')
.post (loginUser)

/**************************************/

module.exports = router
