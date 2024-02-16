const express = require('express');
const mongoose = require('mongoose');
//const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

const PORT = 3000;
const app = express();

mongoose.connect('mongodb+srv://roccyber950:wCWQjiyiUuqciVQr@cluster0.aras1er.mongodb.net/Node-API?retryWrites=true&w=majority').
then(()=> console.log('Connected to MongoDB')).
catch((err) => console.error("Error connecting to MongoDB",err.message));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use('api/products',productRoute);





//getting all products from API server
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (err) {
//         res.status(500).json({message: err.message});
//     }
// });



//to get one id product from API server
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch(err) {
//         res.status(500).json({message: err.message});
//     }
// });



//update product using id and put for a entry in API server
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product) {
//             return res.status(404).json({message:'Product not found'});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     }
//     catch(err) {
//         res.status(500).json({message: err.message});
//     }
// });


//making the products in the API request
// app.post('/api/products', async (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);

//     }catch(err){
//         res.status(500).json({message: err.message});
//     }
// });


//Delete product
// app.delete('/api/products/:id',async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).send({message: 'Product not found'});
//         }
//         res.status(200).send({message: 'Product is successfully deleted'});
//     }
//     catch(err){
//         res.status(500).json({message: err.message});
//     }
// });


app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {console.log(`listening on ${PORT}`)})