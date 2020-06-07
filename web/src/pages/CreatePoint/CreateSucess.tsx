import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './styles.css';

const CreateSucess = () => {
    return (
      <div id="modal">
          <FiCheckCircle color="#34CB79" size={70}/>
          <strong>
            <h1>Cadastro concluído!</h1>
          </strong>
      </div>
    );
  }

export default CreateSucess;