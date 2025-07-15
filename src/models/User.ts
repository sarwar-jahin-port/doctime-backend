import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], required: true },
    // for doctors:
    specialization: { type: String },
    availableSlots: [
      {
        date: String, // "2025-07-20"
        slots: [String], // ["09:00","09:30",…]
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
