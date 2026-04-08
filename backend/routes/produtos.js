import express from "express";
import { getProdutos, createProduto, updateProduto, deleteProduto } from "../controllers/produtos.js";

const router = express.Router();
router.get("/get", getProdutos);
router.post("/create", createProduto);
router.put("/update/:id", updateProduto);
router.delete("/delete/:id", deleteProduto);
export default router;