/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { createContext, useState } from "react";
import Produto from "../model/produto";
import ItemCarrinho from "../model/ItemCarrinho";

interface ContextoCarrinhoProps {
    itens: ItemCarrinho[]
    quantidadeDeItens: number
    adicionar: (item: Produto) => void
    remover: (item: Produto) => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionar(produto: Produto) {
        const indice = itens.findIndex((i) => i.produto.id === produto.id)
        if (indice === -1) {
            setItens([...itens, {produto, quantidade: 1}])
        } else {
            const novosItens = [...itens]
            novosItens[indice].quantidade++
            setItens(novosItens)
        }
    }

    function remover(produto: Produto) {
        const novosItens = itens.map((i) => {
            if (i.produto.id === produto.id) {
                i.quantidade--
            }
            return i
        }).filter((i) => i.quantidade > 0)
        setItens(novosItens)
    }



    return (
        <ContextoCarrinho.Provider 
            value={{
                itens,
                adicionar,
                remover,
                get quantidadeDeItens() {
                    return itens.reduce((acc, item) => acc + item.quantidade, 0)
                },
            }}
        >
            {props.children}
        </ContextoCarrinho.Provider>
    )
}

export default ContextoCarrinho