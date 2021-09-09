const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    sport: String,
    artUrl: String,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;