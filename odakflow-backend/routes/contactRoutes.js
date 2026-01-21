const express = require('express');
const router = express.Router();
const { submitMessage, getMessages, deleteMessage, updateMessageStatus} = require('../controllers/contactController');



router.route('/')
.post(submitMessage)
.get(getMessages);

router.route('/:id')
    .put(updateMessageStatus)
    .delete(deleteMessage);

module.exports = router;