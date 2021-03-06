const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const WithdrawalRequestController = require('../controllers/withdrawal-request.controller');
const checkAuth = require('../middlewares/check-auth');

router.get('/', checkAuth, UserController.get_user);
router.put('/', checkAuth, UserController.update_user);
router.post('/generate-otp', UserController.create_user_if_not_exist, UserController.generate_otp);
router.post('/verify-otp', UserController.verify_otp);
router.get('/ganerate-email-otp', checkAuth, UserController.generate_email_otp);
router.post('/verify-email-otp', checkAuth, UserController.verify_email_otp);
router.get('/resend-otp/:id', UserController.resend_otp);
router.post('/add-game-user-id/:id', checkAuth, UserController.add_game_id);
router.post('/wallet', checkAuth, UserController.get_wallet_balance);
router.get('/wallet/transactions', checkAuth, UserController.wallet_transactions);
router.get('/bank', checkAuth, UserController.get_bank_account);
router.post('/bank', checkAuth, UserController.add_bank_account, UserController.get_bank_account);
router.post('/withdraw', checkAuth, WithdrawalRequestController.create);
router.get('/withdraw/:status', checkAuth, WithdrawalRequestController.get_requests);

module.exports = router;