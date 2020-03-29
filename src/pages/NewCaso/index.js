import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import './styles.css';

import api from '../../services/api';

export default function NewCaso() {
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function cadastrarCaso(event) {
        event.preventDefault();

        const data = {
            titulo,
            descricao,
            valor
        }

        try {
            api.post('casos', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            alert(`Erro ao cadastrar caso: ${err?.response?.data?.mensagem ?? 'Tente novamente.'}`);
        }
    }

    return (
        <div className="new-caso-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={18} color="#e02041" />
                    Voltar para home
                </Link>
                </section>

                <form onSubmit={cadastrarCaso}>
                    <input
                        placeholder="Titulo do caso"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição" maxLength="255"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}