# Importação de carrinho VTEX

O código deste projeto tem com fim fazer uma importação de items de um outro order form.

## Como fazer a importação

Para fazer a importação, basta acessar a loja com o parâmetros **?cartRef=[order-form-id]** e **colar o conteúdo** que esta dentro de `src/index.js` **no terminal**. Após isso, os produtos vão ser importados para o carrinho do usuário e ele pode acessar o checkout normalmente.

**Para conseguir o order-form-id**, basta fazer as seguintes chamadas citadas mais abaixo no documento.

## API do Order Form

A VTEX possui uma api publica que possibilita a consulta, criação e edição de um order form. Isto é, através de um cliente HTTP qualquer (browser, app ou o que for), é possível criar a manipular um carrinho em qualquer loja.

### Criando um Order Form

Para criar um order form basta fazer a seguinte requisição, sem nenhum parâmetro: 

```
GET /api/checkout/pub/orderForm
```

### Adicionando items ao Order Form

Para adicionar items ao carrinho, deve se fazer a seguinte requisição: 
```
POST /api/checkout/pub/orderForm/<order-form-id>/items

{
  "orderItems":[
    {
      "quantity": number,
      "id": numbered string,
      "seller": numbered string
    }
  ]
}

```

### Consultar Order Form

A requisição para consultar o carrinho é o suficiente para fazer a importação do order form por conta do parâmetro set-cookie na resposta da requisição.

```
GET /api/checkout/pub/orderForm/<order-form-id> 
```
