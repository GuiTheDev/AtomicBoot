const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String },
    serverID: { type: String },
    OB$: { type: Number, default: 25 },
    bank: { type : Number },
});

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;