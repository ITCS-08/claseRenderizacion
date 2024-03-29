import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import BaseColaboradores from './components/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('null');

  const agregarColaborador = (nuevoColaborador) => {  
    if (
      nuevoColaborador.nombre.trim() === '' ||
      nuevoColaborador.correo.trim() === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo.trim() === '' ||
      nuevoColaborador.telefono.trim() === ''
    ) {
      setAlertMessage('Por favor completa todos los campos.');
      setAlertVariant('danger');
      return;
    }

    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlertMessage('Colaborador agregado exitosamente.');
    setAlertVariant('success');
  };

  return (
    <div className="container-fluid mt-5">
      <Alert message={alertMessage} variant={alertVariant} />
      <h1>Lista de Colaboradores</h1>
      <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
      <Listado colaboradores={colaboradores} />
      <Formulario agregarColaborador={agregarColaborador} />
    </div>
  );
}

export default App;
