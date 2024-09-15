'use client'
import Pagina from '@/components/template/Pagina'
import ContextoCarrinho from '@/data/contexts/ContextoCarrinho'
import { useContext } from 'react'

export default function Home() {
  const { numero, incrementar, decrementar } = useContext(ContextoCarrinho)

  return (
    <Pagina>
      <div>Início: { numero }</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </Pagina>
  )
}