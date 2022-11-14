import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
import { compare } from 'bcrypt';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Can't be blank"],
        index: true,
        validate: [isEmail, "invalid Email"]
    },
    password: {
        type: String,
        required: [true, "Can't be blank"],
    },
    picture: {
        type: String
    },
    newMessage: {
        type: Object,
        default: {}
    },
    status: {
        type: String,
        default: 'online'
    }
}, { minimize: false });
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

UserSchema.static.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('invalid email or password');

    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new Error('invalid email or password');
    return user;

}
const User = model('User', UserSchema);
export default User