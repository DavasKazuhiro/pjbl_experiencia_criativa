import { useEffect, useState } from "react";

const Modal = (props) => {
    const [isEditing, setIsEditing] = useState(props.isNew);
    const [editedProduto, setEditedProduto] = useState(props.produto);

    const isIntegerValue = (value) => {
        if (value === '' || value === null || value === undefined) return false;
        const numberValue = Number(value);
        return Number.isInteger(numberValue) && !String(value).includes('.');
    };

    useEffect(() => {
        setEditedProduto(props.produto);
        if (props.isNew) {
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [props.produto, props.isNew]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        const payload = {
            ...editedProduto,
        };

        if (!isIntegerValue(payload.preco_custo) || !isIntegerValue(payload.preco_venda)) {
            alert('Preço de custo e preço de venda devem ser valores inteiros.');
            return;
        }

        payload.preco_custo = Number(payload.preco_custo);
        payload.preco_venda = Number(payload.preco_venda);

        if (props.isNew) {
            if (!props.onCreate) {
                return;
            }

            props.onCreate(payload)
                .catch(() => {
                });
            return;
        }

        if (!props.onUpdate) {
            return;
        }

        props.onUpdate(props.produto.idproduto, payload)
            .then(() => {
                setIsEditing(false);
                setEditedProduto(payload);
                if (typeof props.setProduto === 'function') {
                    props.setProduto(payload);
                }
            })
            .catch(() => {
                // mantém no modo edição para correções
            });
    };

    const handleCancel = () => {
        if (props.isNew) {
            props.fecharModal();
            return;
        }
        setEditedProduto(props.produto);
        setIsEditing(false);
    };

    const handleDelete = () => {
        props.onDelete(props.produto.idproduto);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduto({ ...editedProduto, [name]: value });
    };

    const showForm = props.isNew || isEditing;

    return(
        <>
            <div className="modal-overlay" onClick={props.fecharModal}>
                <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={props.fecharModal} aria-label="Fechar">✕</button>
                    <h2>{props.isNew ? 'Novo Produto' : props.produto.nome}</h2>
                    {showForm ? (
                        <>
                            <p><strong>Nome:</strong> <input name="nome" value={editedProduto.nome || ''} onChange={handleChange} /></p>
                            <p><strong>Categoria:</strong>
                                <select name="categoria" value={editedProduto.categoria || ''} onChange={handleChange}>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Bebidas">Bebidas</option>
                                    <option value="Limpeza">Limpeza</option>
                                    <option value="Higiene">Higiene</option>
                                    <option value="Hortifruti">Hortifruti</option>
                                    <option value="Padaria">Padaria</option>
                                </select>
                            </p>
                            <p><strong>Marca:</strong> <input name="marca" value={editedProduto.marca || ''} onChange={handleChange} /></p>
                            <p><strong>Preço de Custo:</strong> <input type="number" step="1" min="0" name="preco_custo" value={editedProduto.preco_custo || ''} onChange={handleChange} /></p>
                            <p><strong>Preço de Venda:</strong> <input type="number" step="1" min="0" name="preco_venda" value={editedProduto.preco_venda || ''} onChange={handleChange} /></p>
                        </>
                    ) : (
                        <>
                            {props.produto.categoria && <p><strong>Categoria:</strong> {props.produto.categoria}</p>}
                            {props.produto.marca && <p><strong>Marca:</strong> {props.produto.marca}</p>}
                            {props.produto.preco_custo && <p><strong>Preço de Custo:</strong> {props.produto.preco_custo}</p>}
                            {props.produto.preco_venda && <p><strong>Preço de Venda:</strong> {props.produto.preco_venda}</p>}
                        </>
                    )}
                    <div className="modal-buttons">
                        {showForm ? (
                            <>
                                <button onClick={handleCancel}><i className="fa-solid fa-ban"></i></button>
                                <button onClick={handleSave}><i className="fa-solid fa-check"></i></button>
                            </>
                        ) : (
                            <>         
                                <button onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                                <button onClick={handleEdit}><i className="fa-solid fa-pencil"></i></button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;