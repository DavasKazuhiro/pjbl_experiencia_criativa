import {db} from "../db.js";

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const createProduto = (req, res) => {
    const q = "INSERT INTO produtos (`nome`, `categoria`, `marca`, `preco_custo`, `preco_venda`) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.nome,
        req.body.categoria,
        req.body.marca,
        req.body.preco_custo,
        req.body.preco_venda,
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json({ idproduto: data.insertId, ...req.body });
    });
};

export const updateProduto = (req, res) => {
    const q = "UPDATE produtos SET nome = ?, categoria = ?, marca = ?, preco_custo = ?, preco_venda = ? WHERE idproduto = ?";
    const values = [
        req.body.nome,
        req.body.categoria,
        req.body.marca,
        req.body.preco_custo,
        req.body.preco_venda,
        req.params.id
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("Produto atualizado com sucesso.");
    });
};

export const deleteProduto = (req, res) => {
    const q = "DELETE FROM produtos WHERE idproduto = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("Produto deletado com sucesso.");
    });
}