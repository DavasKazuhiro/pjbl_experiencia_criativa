import { useState } from "react";
import "../styles/ListaProdutos.css";
import Card from "./Card";
import Modal from "./Modal";

const ListaProdutos = (props) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    function onClickProduto(produto) {
        setProdutoSelecionado(produto);
    }

     function fecharModal() {
        setProdutoSelecionado(null);
    }

    const handleUpdate = (id, updatedProduto) => {
        return fetch(`http://localhost:8800/produtos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduto),
        })
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then((response) => {
            console.log('Update response', response);
            if (typeof props.refresh === 'function') {
                props.refresh();
            }
        })
        .catch(err => {
            console.error('Erro ao atualizar produto:', err);
            alert('Falha ao atualizar produto. Veja console para mais detalhes.');
            throw err;
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja deletar este produto?')) {
            fetch(`http://localhost:8800/produtos/delete/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => {
                props.refresh();
                setProdutoSelecionado(null);
            })
            .catch(err => console.error(err));
        }
    };

    return(
        <>
        <section className="secao-lista">
            <div className="titulo-lista"><h1>Lista de Produtos</h1></div>
            
            <div className="lista">
                <ul>
                {props.produtos.map((produto) => (
                    <Card produto={produto} key={produto.idproduto} onClick={onClickProduto}></Card>
                ))}
                </ul>
            </div>
        </section>

        {produtoSelecionado && (<Modal produto={produtoSelecionado} setProduto={setProdutoSelecionado} fecharModal={fecharModal} onUpdate={handleUpdate} onDelete={handleDelete}></Modal>)}        
        </>
    )
}

export default ListaProdutos;