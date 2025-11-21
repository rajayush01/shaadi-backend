import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  imageUrl: { type: String, required: true }, // cloudinary URL
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Submission", submissionSchema);
