import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from ".bcryptjs";

const register = async (req, res) => {
    const {name, email, password} = req.body;
}