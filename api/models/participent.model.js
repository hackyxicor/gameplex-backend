const mongoose = require('mongoose');

const participentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    wallet_transaction: Object,
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
    result_meta: { kills: String, rank: Number, score: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
});

module.exports = mongoose.model('Participent', participentSchema);