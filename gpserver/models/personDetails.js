import { Schema,
    model} from 'mongoose'

const Person = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        mobile: { type: Number, required: true },
    },
    { timestamps: true },
)
export const PersonDetails = model("PersonDetails", Person);
