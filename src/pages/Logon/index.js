import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css'
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function logon(event) {
        event.preventDefault();
        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);
            history.push('/profile');
        } catch (err) {
            alert(`Erro ao realizar logon: ${err?.response?.data?.mensagem ?? 'Tente novamente.'}`);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero logo" />

                <form onSubmit={logon}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua Id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="register">
                        <FiLogIn size={18} color="#e02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    );
}