const router = require('express').Router();
// const models = require('../models');
const modelToRoutes = require('./modelToRoutes').bind({ router });

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

Object.entries({
  // convert mongoose models to resources using this syntax:
  // users: models.User,
})
.forEach(modelToRoutes);

module.exports = router;
