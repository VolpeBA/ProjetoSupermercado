'use client'
import { useContext } from 'react';
import Pagina from '../../../components/template/Pagina';
import ContextoCarrinho from '@/data/contexts/ContextoCarrinho';

export default function PaginaCarrinho() {
    const { numero } = useContext(ContextoCarrinho)

    return <Pagina>Carrinho: {numero}</Pagina>
}