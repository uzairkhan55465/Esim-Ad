var router = require('express').Router();

router.use('/user', require('./api/user.js'));
router.use('/upload', require('./api/upload.js'));
router.use('/auth', require('./api/AuthToken.js'));
router.use('/productcatalog', require('./api/productcatalog.js'));
router.use('/companyInfo', require('./api/customer.js'));
router.use('/customer', require('./api/customer.js'))
router.use('/setting', require('./api/setting.js'));
router.use('/managestatus', require('./api/managestatus.js'));





module.exports = router;