# Wipro-Bot

### Resumo de funcionamento
Wipro-Bot faz recomendações de refeições diárias

### Topologia

### Estrutura de diretórios
```
    .
    ├── config            # Dentro dessa pasta estão os arquivos contendo as constantes da aplicação
    ├── server             # Arquivos contendo as configurações gerais do servidor da aplicação
    ├── src                # lib, models, services, logs...
    └── test               # Testes unitários
```

### Chamadas exemplo

### **GET** /health
- Retorna o status do serviço.

>:white_check_mark: **_Retorno com sucesso_**

>**HTTP Status** `200`
```
{
    "/health": true
}
```

>:x: **_Retorno default_**

>**HTTP Status** `500`

>**Response**
```
{ "description": "Serviço indisponível" }
```




### Instalação

### Testes
Com a aplicação instalada, para executar os testes unitários, utilize o comando `npm test` no terminal.
