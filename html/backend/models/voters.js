const Voter = require("../lib/mongo").Voter

module.exports = {
    create: function create(voter) {
        return Voter.create(voter).exec()
    },

    getVoters: function getVoters() {
        return Voter.find().exec()
    }
}