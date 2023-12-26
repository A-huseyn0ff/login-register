import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema(
    {
        Username: { type: String, required: true, unique: true },
        role: { type: String, required: true, default: "user" },
        password:{type:String,required:true},
       
      },
      { timestamps: true }
);

export default mongoose.model("user", UserScheme);