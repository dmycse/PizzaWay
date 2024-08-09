import mongoose from "mongoose";

export let mongoDbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully connected to MongoDB`);

  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};