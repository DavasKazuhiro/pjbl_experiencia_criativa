import express from "express";
import { getProdutos, updateProduto, deleteProduto } from "../controllers/produtos.js";

const router = express.Router();
router.get("/get", getProdutos);
router.put("/update/:id", updateProduto);
router.delete("/delete/:id", deleteProduto);
export default router;