const mongoose = require('mongoose');

const battleQueueSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
    tournament: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "Tournament" },
    battle: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "Battle" },
    full: { type: Boolean, default: false },
    chat_room: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "ChatRoom" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },
    created_by: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" }
});

module.exports = mongoose.model('BattleQueue', battleQueueSchema);