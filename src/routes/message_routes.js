const express = require('express');
const router = express.Router();

const {
    sendmessage,
    getmessages,
    editmessage,
    deletemessage
} = require('../controllers/message_controller');

router.post('/', sendmessage);

router.get('/', getmessages);

router.patch('/:id', editmessage);

router.delete('/:id', deletemessage);

module.exports = router;

