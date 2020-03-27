import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); // useHistory serve para modificar a rota pelo javascript

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email, whatsapp, city, uf
        }

        
        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return (
       <div className="register-container">
           <div className="content">
                <section>
                    <img src={logo} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form action="" onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} 
                    onChange={e => setName(e.target.value)}/>

                    <input type="email" placeholder="Email" value={email} 
                    onChange={e => setEmail(e.target.value)}/>

                    <input placeholder="Telefone" value={whatsapp} 
                    onChange={e => setWhatsapp(e.target.value)}/>

                    <div className="input-group">
                        <input placeholder="Cidade" value={city} 
                    onChange={e => setCity(e.target.value)}/>

                        <input placeholder="UF" style={{ width: 80 }} value={uf} 
                    onChange={e => setUf(e.target.value)}/>  
                        {/*Propriedade style no input no react
                        a primeiras chaves é por que ta sendo colocado um código javaScript
                        As segundas aspas é por que ta sendo colocado um obejto no javaScript*/}
                        
                    </div>
                    <button className="button" type="submit">Cadatrar</button>
                </form>
           </div>
       </div>     
    )
}