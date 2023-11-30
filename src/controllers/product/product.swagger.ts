import { CrudSwagger } from './../crud/crud.swagger';
export const productSwagger: CrudSwagger = {
    createOperation: {
        description: "Operação responsável por criar um novo produto.",
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            PRD_ProductName: {
                                default: "sapato tamanho 37",
                                description: "nome do Produto que será criado.",
                            },
                            PRD_ProductStock: {
                                default: 1,
                                description: "quantidade do estoque do Produto."
                            },
                            PRD_SellerId: {
                                default: 7,
                                description: "Id do usuário vendedor que está cadastrando um novo produto."
                            }
                        }
                    }
                }
            }
        }
    },
    getOperation: {
        operation: {
            description: "Operação responsável por pegar um novo usuário."
        },
        where: {
            name: "where",
            schema: {
                type: "string"
            },
            example: {"PRD_ProductId": 1}
        }
    },
    paginateOperation: {
        operation: {
            description: "Operação responsável por Paginar Produtos"
        },
        where: {
            required: false,
            example: {"PRD_SellerId": 7}
        }
    },
    deleteOperation: {
        operation: {
            description: "Operação responsável por deletar um produto."
        },
        where: {
            required: true,
            example: {"PRD_ProductId": 1}
        }
    },
    listOperation: {
        operation: {
            description: "Operação responsável por listar Produtos."
        },
        where: {
            required: false,
            example: {"PRD_SellerId": 7}
        }
    },
    updateOperation: {
        operation: {
            description: "Operação responsável por atualizar um produto.",
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                PRD_ProductName: {
                                    default: "sapato tamanho 37 atualizado",
                                    description: "nome do Produto que será criado.",
                                },
                            }
                        }
                    }
                }
            }
        },
        where: {
            required: true,
            example: {"PRD_ProductId": 1}
        }
    }
}