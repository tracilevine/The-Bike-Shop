const { createBikeshop, loginBikeshop } = require('../../controllers/bikeshop');

const router = require('express').Router(),
  {
    createCyclist,
    loginCyclist,
    requestPasswordReset,
    passwordRedirect
  } = require('../../controllers/cyclist');

router.post('/', createCyclist);
router.post('/login', loginCyclist);
router.post('/bikeshop', createBikeshop);
router.post('/loginbikeshop', loginBikeshop);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);

module.exports = router;
