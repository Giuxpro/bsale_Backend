## Bsale-backend API
- - - 

### Todos los productos
- - -

**Request**

`GET /products`

    https://bsale-backend-lac.vercel.app/products

**Respoonse**

`Code` = *200*
`Description` = *Ok*
`Example Value` =

        [
            {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
            },
            {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1
            },
            {
            "id": 7,
            "name": "ENERGETICA SCORE",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
            "price": 1290,
            "discount": 0,
            "category": 1
            },
            {
            "id": 8,
            "name": "PISCO ALTO DEL CARMEN 35º",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
            "price": 7990,
            "discount": 10,
            "category": 2
            }
        ]

`It will give an Error on` => *https://bsale-backend-lac.vercel.app/produc*
`Code` = *404*
`Description` = *Not Found*
`Example Value` =

        
        Cannot GET /produc
        
___

### Búsqueda de productos por nombre
- - -

**Request**

`GET /products?name=name`

    https://bsale-backend-lac.vercel.app/products?name=fanta

**Respoonse**

`Code` = *200*
`Description` = *Ok*
`Example Value` =

        [
            {
            "id": 52,
            "name": "Fanta",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
            "price": 1500,
            "discount": 0,
            "category": 4
            }
        ]

`It will give an Error on` => *https://bsale-backend-lac.vercel.app/products?name=inca*
`Code` = *404*
`Description` = *Not Found*
`Example Value` =

        {
            "error": "Lo sentimos de momento no tenemos el producto con el nombre inca"
        }
___

## Búsqueda de Producto por Categoria
- - -

**Request**

`GET /products/:category`

    https://bsale-backend-lac.vercel.app/products/6

**Response**

`Code` = *200*
`Description` = *Ok*
`Example Value` =

        [
            {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "category": 6
            },
            {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "category": 6
            }
        ]
`It will give an Error on` => *https://bsale-backend-lac.vercel.app/products/9*
`Code` = *404*
`Description` = *Not Found*
`Example Value` =

        {
            "error": "Lo sentimos de momento no tenemos la categoria 9"
        }
___ 

## Todas las categorias
- - -

**Request**

`GET /categories`

    https://bsale-backend-lac.vercel.app/categories

**Response**

`Code` = *200*
`Description` = *Ok*
`Example Value` =

        [
            {
            "id": 1,
            "name": "bebida energetica"
            },
            {
            "id": 2,
            "name": "pisco"
            },
            {
            "id": 3,
            "name": "ron"
            },
            {
            "id": 4,
            "name": "bebida"
            },
            {
            "id": 5,
            "name": "snack"
            },
            {
            "id": 6,
            "name": "cerveza"
            },
            {
            "id": 7,
            "name": "vodka"
            }
        ]

`It will give an Error on` => *https://bsale-backend-lac.vercel.app/categori*
`Code` = *404*
`Description` = *Not Found*
`Example Value` =

        
        Cannot GET /categori
        