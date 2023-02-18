const express = require('express');
const fs = require('fs/promises');
const app = express();

const PORT = 8080;

app.use(express.json()); //Me parsea a JSON lo que me entra por body.

app.get('/product', async (req, res) => {
    const data = await fs.readFile(__dirname+'/db/db.txt', 'utf-8');
    res.json(JSON.parse(data))
});
app.get('/product/:id', async (req, res) => {
    const id = req.params.id; // query y params SIEMPRE vienen en string
    const data = await fs.readFile(__dirname+'/db/db.txt', 'utf-8');
    const products = JSON.parse(data);
    //const product = products.filter(product => product.id === Number(id)); // retorna una coincidencia o undefined
    const product = products.filter(product => {
        // operacion
        return product.id === Number(id)
    }); 
    if(product.length == 0) return res.json({message: "Product not found."});
    res.json(product);
});
app.post('/product', async (req, res) => {
    const newProduct = req.body;
    const data = await fs.readFile(__dirname+'/db/db.txt', 'utf-8');
    const products = JSON.parse(data);
    // products.push({id: products.length+1, product: newProduct.product, price: newProduct.price})
    products.push({id: products.length+1, ...newProduct}) // -> le meto adentro todo lo de newProduct
    console.log(products);
    const productString = JSON.stringify(products)
    await fs.writeFile(__dirname+'/db/db.txt', productString, 'utf-8');
    res.json({message: "Agregando el nuevo producto. "})
});
/*app.put();
app.delete(); */

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})