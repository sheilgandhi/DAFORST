import mongoose from 'mongoose'

const assetsSchema = mongoose.Schema({
    id: String,
    location: String,
    cid: String,
    name: String,
    owner: String,
    description: String

});

export default mongoose.model('assets', assetsSchema);