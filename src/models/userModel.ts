import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    displayName: {
        type: String,
        required: 'Enter a display name'
    },
    password: {
        type: String            
    },
    permissionGroup: {
        type: Number            
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date
    }
});