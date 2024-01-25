import Message from "../models/message.js";
import User from "../models/user.js";
import Chat from "../models/chat.js";


    const sendMessage = async (req, res) => {
        const { message, chatId} = req.body;

    if (!message || !chatId) {
        console.log("invalid data passed into request");

        return res
            .status(400)
            .json({error: "Please provide all fields to send message"});
    }  
    
    var newMessage = {
        sender: req.user_id,
        message: message,
        chat: chatId,
    };

    try {
        let m = await Message.create(newMessage);

        m = await m.populate("sender", "name");
        m = await m.populate("chat");
        m = await User.populate(m, {
            path: "chat.users",
            select: "name email_id",
        });

        await Chat.findByIdAndUpdate(chatId, {latestMessage: m}, { new:true});

        res.status(200).json(m);
    } catch (error) {
        res.status(400).json(error.message);
    }
    };

    const allMessages = async (req, res) => {
        try {
            const {chatId} = req.params;

            const getMessage = await Message.find({chat:chatId})
                .populate("sender", "name email_id")
                .populate("chat");

            res.status(200).json(getMessage);    
        } catch (error) {
            res.status(400).json(error.message);
        }
    };

    export { allMessages, sendMessage};