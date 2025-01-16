

const mongoose = require("mongoose")

const MessageSchema = mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId :{
        type: String
    },
    receiverId: {
        type: String
    },
    text:{
        type: String
    },
    type:{
        type: String
    }
},
{
    timeStamps : true
})

const MessageModel = mongoose.model("Message",MessageSchema)


module.exports = {
    MessageModel
}
