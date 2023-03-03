const express = require("express");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const products = [
  { id: 1, name: 't-shirt', category: 'Clothing', price: 10.99 },
  { id: 2, name: 'playstation', category: 'Electronics', price: 520.99 },
  { id: 3, name: 'football', category: 'Sports', price: 30.99 },
  { id: 4, name: 'televishion', category: 'Electronics', price: 40.99 }
];



app.get('/', (req, res) => res.send('Hello Welcome to Shopping!')); 

// An endpoint to return all the products. 
app.get('/products', (req, res) => {
  res.json(products);
});



// An endpoint to return a specific product. 
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// An endpoint to return products in a specific category. 
app.get('/products/category/:category', (req, res) => {
    const category = req.params.category;
    if (!category) {
      return res.status(400).json({ error: 'Invalid category parameter' });
    }
    const filteredProducts = products.filter(p => p.category === category);
    res.json(filteredProducts);
  });

// An endpoint to update a product
app.put("/products", (req, res) => {
    const product_details = req.body;
  products.map((product) => {
      if (product.id === product_details.id) {
        product.name = product_details.name;
        product.category = product_details.category;
        product.price = product_details.price;
       
        return product;
      }
      else{
          return product;
      }
  
    });
      res.json(products);
  });

//   An endpoint to delete a product. 


  app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!id) {
      return res.status(400).json({ error: 'Invalid product id' });
    }
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
  });




app.listen(3000, () => {
  console.log('Server started on port 3000');
});
