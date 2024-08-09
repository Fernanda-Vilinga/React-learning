// src/componentes/CreateLocator/index.tsx
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import MapApi from '../../MapApi';
import ItemSeletor from '../../ItemSeletor';

const CreateLocator: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Correção: deve ser número e não string

  const handleUpdate = (city: string, state: string) => {
    setCity(city);
    setState(state);
  };

  const handleItemsUpdate = (items: number[]) => { // Correção: deve ser número e não string
    setSelectedItems(items);
  };

  return (
    <div id='geral2' className="geral2">
      <div className='conteudo2'>
        <header className="header2">
          <div className='logo2'></div>
          <Link className="link2" to="/">
            <FiArrowLeft className="icone" />
            Voltar para Home
          </Link>
        </header>
        <form action="" className="form">
          <h1 className="logoTittle2">Cadastro do <br /> local de coleta </h1>
          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="campos1">
              <label htmlFor="nome">Nome da entidade</label><br />
              <input type="text" name="nome" id="nome" />
            </div>
            <div className="campos2">
              <div>
                <label htmlFor="email">E-mail</label><br />
                <input type="text" name="email" id="email" />
              </div>
              <div className="w">
                <label htmlFor="what">Whatsapp</label> <br />
                <input type="text" name="what" id="what" />
              </div>
            </div>
          </fieldset>
          <fieldset className='end'>
            <legend>
              <h2 className="lad">Endereço</h2>
              <span className="lado1">Marque o endereço no mapa</span>
            </legend>
            <MapApi onUpdate={handleUpdate} /> {/* Incluindo o componente do mapa */}
            <div className="campos34">
              <div className="campos3">
                <label htmlFor="city">Cidade</label><br />
                <input type="text" name="city" id="city" value={city} readOnly />
              </div>
              <div className="campos4">
                <label htmlFor="estado">Estado</label><br />
                <input type="text" name="estado" id="estado" value={state} readOnly />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h2 className="lad">Itens coletados</h2>
              <span className="lado2">Você pode marcar um ou mais itens</span>
            </legend>
            <ItemSeletor /> {/* Incluindo o componente de seleção de itens */}
          </fieldset>
          <button className="btC" type="submit">Cadastrar local de coleta</button>
        </form>
      </div>
    </div>
  );
};

export default CreateLocator;
