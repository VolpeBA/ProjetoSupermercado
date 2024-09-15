/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";

export default function Layout(props: any) {
    return <ProvedorCarrinho>{props.children}</ProvedorCarrinho>
}