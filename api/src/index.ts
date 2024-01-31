import express from "express";
import { config } from "dotenv";
import categoryRouter from "./routes/category.route";
import { connectDB } from "./utils/db";
config();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRouter);

connectDB(() => {
  const port = process.env.PORT || 5555;
  app.listen(port, () => {
    console.log(`API on http://127.0.0.1:${port}`);
  });
});
