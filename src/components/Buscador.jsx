import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Buscador({ colaboradores, setColaboradores }) {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    const filteredColaboradores = colaboradores.filter((colaborador) => {
      return Object.values(colaborador).some((value) =>
        value.toString().toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setColaboradores(filteredColaboradores);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
}

export default Buscador;