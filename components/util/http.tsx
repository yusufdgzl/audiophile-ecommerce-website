'use client'

import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient();

export async function getProducts(){

    const response = await fetch('/api');
    
    if( !response ){
        throw new Error('getProducts işlevinden dönüş alınamadi');
    }

    const data = response.json();

    return data;

}