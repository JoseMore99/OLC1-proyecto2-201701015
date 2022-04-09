export enum tipo {
    NUMERO ,
    STRING ,
    BOOLEAN,
    NULL 
}

export type Retorno = {
    valor: any,
    type: tipo
}

export const tipos = [
    [   
        tipo.NUMERO, tipo.STRING, tipo.NUMERO
    ],
    [ 
        tipo.STRING, tipo.STRING, tipo.STRING
    ],
    [ 
        tipo.NUMERO, tipo.STRING, tipo.NUMERO
    ]
];