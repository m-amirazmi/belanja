import mongoose, { MongooseError } from "mongoose";

export const connectDB = (cb: () => void) => {
  const url = process.env.DB_URI as string;

  try {
    mongoose.connect(url);
  } catch (err) {
    console.error((err as MongooseError).message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
    cb();
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
};
