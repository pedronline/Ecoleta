import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>
      <form>
        <h1>
          Registo do <br />
          ponto de coleta
        </h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">País / Estado</label>
              <select name="uf" id="uf">
                <option value="0">Selecione</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Items de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>
          <ul className="items-grid">
            <li className="selected">
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="test"
              />
              <span>Baterias</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Registar Ponto de Coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
