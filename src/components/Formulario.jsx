import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario({ agregarColaborador }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador({ nombre, correo, edad, cargo, telefono });
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    
    <>
    <div className="container ">
    <div className="form-container "> 
      <h2 className=" mb-3 ">Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo</label>
          <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input type="number" className="form-control" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">Cargo</label>
          <input type="text" className="form-control" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        </div>
        <div className="mb-2">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Formulario;