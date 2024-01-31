import express from "express";
import { config } from "dotenv";
import categoryRouter from "./routes/category.route";
config();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening to port 2", process.env.PORT);
});
