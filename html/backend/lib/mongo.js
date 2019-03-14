const config = require("config-lite")(__dirname)
const Mongolass = require("mongolass")
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.Voter = mongolass.model("Voter", {
    phone: {
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'string',
        required: true
    },
    gender: {
        type: 'string',
        enum :['男', '女'],
        default: '男'
    },
    choice: {
        type: 'string',
        required: true
    }
})

exports.Voter.index({phone: 1}, {unique: true}).exec()

