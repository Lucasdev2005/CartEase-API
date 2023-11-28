import { CrudSwagger } from "../crud/crud.swagger";

export const userSwagger: CrudSwagger = {
    createOperation: {
        description: "Operação responsável por criar um Usuário",
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            USR_Username: {
                                type: 'string',
                                description: 'Nome de usuário exclusivo do mesmo.',
                                default: 'Vendedor de teste',
                            },
                            USR_UserSeller: {
                                type: 'boolean',
                                description: "Booleano para dizer que usuário é vendedor ou não. Se for true é um vendedor se for false não será um vendedor.",
                                default: true,
                            },
                            USR_UserPassword: {
                                type: 'string',
                                description: "Senha de usuário com tamanho minímo de 9 caracteres.",
                                default: 'cartease@123',
                            },
                            USR_UserAdress: {
                                type: 'string',
                                description: "Endereço do usuário.",
                                default: 'Serrinha',
                            }
                        }
                    }
                }
            }
        }
    },
    getOperation: {
        operation: {
            description: "Operação responsável por pegar um usuário a partir de certas informações",
        },
        where: {
            name: "where",
            schema: {
                type: "string"
            },
            example: {"USR_UserId": 8}
        }
    },
    deleteOperation: {
        operation: {
            description: "Operação responsável por deletar um usuário a partir de certas informações"
        },
        where: {
            name: 'where',
            schema: {
                type: 'string'
            },
            example: {"USR_UserId": 8}
        }
    },
    listOperation: {
        operation: {
            description: "Operação responsável por listar usuários com ou sem requisitos"
        },
        where: {
            name: "where",
            schema: {
                type: "string",
            },
            example: "{\n  \"USR_Username\": \"vendedor de teste\"\n}"
        }
    },
    paginateOperation: {
        operation: {
            description: "Lista páginada de usuários"
        },
        where: {
            name: 'where',
            description: "JSON com a chave do ID do usuário e o valor.",
            required: false,
            example:  {"USR_Username": "nomeDoUsuario"}  
        },
    },
    updateOperation: {
        operation: {
            description: "end-point responsável por atualizar um usuário.",
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            properties: {
                                USR_Username: {
                                    type: 'string',
                                    description: 'Nome de usuário novo do mesmo.',
                                    default: 'Vendedor de teste alterado',
                                },
                            }
                        }
                    }
                }
            }
        },
        where: {
            name: "where",
            description: "JSON com id do usuário e seu valor.",
            schema: {
                type: "string",
            },
            example: {"USR_UserId": 7}   
        }
    }
}