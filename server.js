import express from "express";
import cors from "cors";
import expenseRouter from "./routes/expenses.js";

const PORT = process.env.PORT || 1234;

const app = express();

app.use(cors());
app.use("/api/expenses", expenseRouter);

app.use(express.json());

app.listen(PORT, ()=> console.log(`server running from port: ${PORT}`));