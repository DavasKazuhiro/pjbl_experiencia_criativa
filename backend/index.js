import express from "express";
import cors from "cors";
import produtosRouters from "./routes/produtos.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/produtos", produtosRouters);

app.listen(8800);