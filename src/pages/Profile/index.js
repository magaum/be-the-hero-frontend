import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {

    const nome = localStorage.getItem('ongNome');
    const ongId = localStorage.getItem('ongId');

    const [casos, setCasos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get(`ongs/${ongId}/casos`)
            .then(response => {
                setCasos(response.data);
            })
            .catch(err => {
                alert(`Erro ao buscar casos: ${err?.response?.data?.mensagem ?? 'Tente novamente.'}`);
            })
    }, [ongId]);

    async function deleteCaso(id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            setCasos(casos.filter(caso => caso.id !== id))
            alert('Caso removido com sucesso!')
        } catch (err) {
            alert(`Erro ao deletar caso: ${err?.response?.data?.mensagem ?? 'Tente novamente.'}`);
        }
    }

    async function logout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero logo" />
                <span>Bem vinda, {nome}</span>

                <Link className="button" to="/cadastro/casos">Cadastrar novo caso</Link>

                <button type="button" onClick={logout}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {casos.map(caso =>
                    <li key={caso.id}>
                        <strong>Caso:</strong>
                        <p>{caso.titulo}</p>

                        <strong>Descrição</strong>
                        <p>{caso.descricao}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</p>

                        <button type="button" onClick={() => deleteCaso(caso.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}