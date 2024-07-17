import jwt from 'jsonwebtoken';

const generateTokenAndsetcookie = (userId, res) => {
const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:'15d',});

res.cookie("jwt", token,{
    maxAge: 15 * 24 * 60 * 1000, //MS
    httponly: true, //prevents XXa attacks cross-site scripting attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
})
}

export default generateTokenAndsetcookie;