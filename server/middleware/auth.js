import jwt from 'jsonwebtoken'
import User from "../models/User.js"

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Not authorized, no token' })
    }

    const token = authHeader.split(' ')[1] // separa o "Bearer" do token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select("-password")
        if (!req.user) {
            return res.status(401).json({ success: false, message: 'User not found' })
        }

        next()
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Token invalid or expired' })
    }
}
