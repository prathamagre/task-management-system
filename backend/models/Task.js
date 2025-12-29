import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
    description: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: true,
},
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
    status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });   

export default mongoose.model("Task", taskSchema);