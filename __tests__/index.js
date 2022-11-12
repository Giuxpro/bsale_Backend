const request = require('supertest');
const url = 'http://localhost:3001';

describe('GET /products', () => {

	it('should return status code 200', async () => {
		const response = await request(url).get('/products');
		expect(response.statusCode).toBe(200);
	});

	it("can't be empty array", async () => {
		const response = await request(url).get('/products');
		expect(response.body).not.toHaveLength(0);
	});

});

describe('GET /products?name=name', () => {

    it('should return status code 200', async () => {
        const response = await request(url).get('/products?name=PISCO');
        expect(response.statusCode).toBe(200);
    });

    it('should return messageError if products its not found', async () =>{
        const response = await request(url).get('/products?name=incacola');
        expect(response.body.error).toBe('Lo sentimos de momento no tenemos el producto con el nombre incacola');
    });

    it('should return status code 404 if product no found', async () => {
        const response = await request(url).get('/products?name=incacola');
        expect(response.statusCode).toBe(404);
    });
});

describe('GET /categories', () => {

    it('should return status code 200', async () => {
        const response = await request(url).get('/categories');
        expect(response.statusCode).toBe(200);
    });

    it('cant be empty array', async () => {
        const response = await request(url).get('/categories');
        expect(response.body).not.toHaveLength(0);
    });

});


describe('GET /products/:category', () => {

    it('should return status code 200 if match any categories', async () => {
        const response = await request(url).get(`/products/1`);
        expect(response.statusCode).toBe(200);
    });

    it('should return status code 200 if match any categories', async () => {
        const response = await request(url).get(`/products/7`);
        expect(response.statusCode).toBe(200);
    });

    it('should return products from the "energetica" category', async () => {
		const response = await request(url).get(`/products/1`);
		expect(response.body[0].category).toBe(1)

	});

	it('should return products from the "pisco" category', async () => {
		const response = await request(url).get(`/products/2`);
		expect(response.body[0].category).toBe(2)
	});

	it('should return products from the "ron" category', async () => {
		const response = await request(url).get(`/products/3`);
		expect(response.body[0].category).toBe(3)
	});

	it('should return products from the "bebida" category', async () => {
		const response = await request(url).get(`/products/4`);
		expect(response.body[0].category).toBe(4)
	});

	it('should return products from the "snack" category', async () => {
		const response = await request(url).get(`/products/5`);
		expect(response.body[0].category).toBe(5)
	});

	it('should return products from the "cerveza" category', async () => {
		const response = await request(url).get(`/products/6`);
		expect(response.body[0].category).toBe(6)
	});

	it('should return products from the "vodka" category', async () => {
		const response = await request(url).get(`/products/7`);
		expect(response.body[0].category).toBe(7)
	});

    it('should return error message if the category not exists', async () => {
        const response = await request(url).get(`/products/8`);
        console.log(response)
        expect(response.body.error).toBe('Lo sentimos de momento no tenemos la categoria 8');
    });
    it('should return status code 404 if the category not exists', async () => {
        const response = await request(url).get(`/products/8`);
        expect(response.statusCode).toBe(404);
    });
    

});