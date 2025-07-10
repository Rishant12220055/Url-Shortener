import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
    {
    originalUrl: { 
        type: String, 
        required: true 
    },
    shortUrl: { 
        type: String, 
        required: true, 
        unique: true 
    },
    clicks: { 
        type: Number, 
        default: 0 
    },
<<<<<<< HEAD
    // we now need to pass in the user id to the url model
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Password protection fields
    isPasswordProtected: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: false
    },
    passwordAttempts: {
        type: Number,
        default: 0
    },
    // Active/disabled status for the link
    isActive: {
        type: Boolean,
        default: true
    }
=======
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
}, 
{
    timestamps: true
}
);

<<<<<<< HEAD
export default mongoose.model('Url', urlSchema); 
=======
export default mongoose.model('Url', urlSchema); 
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
