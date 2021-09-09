const router = require('express').Router();
const ctrl = require('../controllers');

const authRequired = require('../middleware/authRequired');

router.get('/', authRequired, ctrl.teams.index);
router.get('/:id'. ctrl.games.show);

module.exports = router;