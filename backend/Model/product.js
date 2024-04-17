import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  ProductTitle: { type: String, required: "Question must have a title" },

  noOfProduct: { type: Number, default: 0 },
 
  
});

export default mongoose.model("Question", QuestionSchema);