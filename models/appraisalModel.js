import mongoose from "mongoose";

const appraisalSchema = mongoose.Schema(
    {
        appraisalName: {
            type: String,
            required: true
        },
        value_1 : [],
        value_2 : [],
        value_3 : [],
        value_4 : [],
        value_5 : [],
    }
)

const appraisalModel = mongoose.model("Appraisal", appraisalSchema);
export default appraisalModel