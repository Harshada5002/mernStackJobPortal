import mongoose from "mongoose";

export const connection = () => {
  return mongoose.connect(process.env.MONGO_URL, {
    dbName: "JOB_PORTAL_WITH_AUTOMATION"
  })
  .then(() => console.log("MongoDB connected."))
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  });
};