import { useEffect, useState } from 'react';
import ListaProdutos from "./components/ListaProdutos";

function App() {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = () => {
    fetch('http://localhost:8800/produtos/get')
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div>
      <ListaProdutos produtos={produtos} refresh={fetchProdutos} />
    </div>
  );
}

export default App;