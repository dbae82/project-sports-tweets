const router = require('express').Router();
const ctrl = require('../controllers');

const authRequired = require('../middleware/authRequired');

router.get('/', authRequired, ctrl.team.index);
router.get('/:id', ctrl.team.show);

module.exports = router;