
import mongoose from "mongoose";
        import validator from "validator";

        const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please Provide a Username"],
            trim: true,
            minlength: 4,
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            unique: true,
            trim: true,
            validate: {
            validator: validator.isEmail,
            message: "Please Provide Email",
            },
        },
        password: {
            type: String,
            required: [true, "Please Provide Password"],
            minlength: 8,
            trim: true,
        },
        });

        export default mongoose.model("User", userSchema);
        
//  In models/chat.js, enter the below code.

import mongoose from "mongoose";

        const chatSchema = new mongoose.Schema(
        {
            chatName: {
            type: String,
            trim: true,
            },
            isGroupChat: {
            type: Boolean,
            default: false,
            },
            users: [
            {
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
            ],
            latestMessage: {
            type: mongoose.Types.ObjectId,
            ref: "Message",
            },
            groupAdmin: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            },
        },
        { timestamps: true }
        );

        export default mongoose.model("Chat", chatSchema);
        
// Finally for the message model in models/message.js, the following code will be used

import mongoose from "mongoose";

        const messageSchema = new mongoose.Schema(
        {
            sender: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            },
            message: {
            type: String,
            trim: true,
            },
            chat: {
            type: mongoose.Types.ObjectId,
            ref: "Chat",
            },
        },
        {
            timestamps: true,
        }
        );

        export default mongoose.model("Message", messageSchema);
    