import mongoose from "mongoose";

const connectToDB = async () => {
  const url = process.env.MONGO_URI;

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
