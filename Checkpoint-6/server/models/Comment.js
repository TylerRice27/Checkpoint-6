import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const CommentSchema = new Schema({

    creatorId: { type: ObjectId, required: true },
    eventId: { type: ObjectId, required: true },
    body: { type: String, required: true },
    isAttending: { type: Boolean, default: false },
}, { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})