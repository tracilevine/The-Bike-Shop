const router = require('express').Router(),
  {
    getCurrentCyclist,
    updateCurrentCyclist,
    logoutCyclist,
    logoutAllDevices,
    deleteCyclist,
    updatePassword
  } = require('../../controllers/cyclist');

router.get('/me', getCurrentCyclist);
router.patch('/me', updateCurrentCyclist);
router.post('/logout', logoutCyclist);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteCyclist);
router.put('/password', updatePassword);

module.exports = router;
