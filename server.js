const express = require('express'); //import express library
const port = 3000; //initialising a port for the server
const app = express() //app instance
app.use(express.json()) //middleware to parse json

// initialising working variables
const products = [
    { id: 1, name: "monitor", type: "LED", brand: "samsung", price: 8000, rating: 4.1 },
    { id: 2, name: "laptop", type: "thinkpad", brand: "lenovo", price: 30000, rating: 4.5 },
    { id: 3, name: "mouse", type: "wireless", brand: "logitech", price: 700, rating: 4.3 },
    { id: 4, name: "keyboard", type: "mechanical", brand: "corsair", price: 2500, rating: 4.6 },
    { id: 5, name: "laptop", type: "pavilion", brand: "hp", price: 40000, rating: 4.3 },
    { id: 6, name: "monitor", type: "IPS", brand: "dell", price: 10000, rating: 4.4 },
    { id: 7, name: "mouse", type: "gaming", brand: "corsair", price: 1200, rating: 4.6 },
    { id: 8, name: "laptop", type: "macbook", brand: "apple", price: 100000, rating: 4.8 },
    { id: 9, name: "keyboard", type: "membrane", brand: "logitech", price: 1200, rating: 4.2 },
    { id: 10, name: "mouse", type: "ergonomic", brand: "logitech", price: 1500, rating: 4.4 },
    { id: 11, name: "monitor", type: "4K", brand: "lg", price: 15000, rating: 4.6 },
    { id: 12, name: "keyboard", type: "gaming", brand: "corsair", price: 3500, rating: 4.7 },
    { id: 13, name: "laptop", type: "envy", brand: "hp", price: 45000, rating: 4.1 },
    { id: 14, name: "mouse", type: "wired", brand: "logitech", price: 400, rating: 4.0 },
    { id: 15, name: "monitor", type: "IPS", brand: "lenovo", price: 9500, rating: 4.3 },
    { id: 16, name: "keyboard", type: "wireless", brand: "hp", price: 1800, rating: 4.3 },
    { id: 17, name: "laptop", type: "ideapad", brand: "lenovo", price: 25000, rating: 4.2 },
    { id: 18, name: "keyboard", type: "mechanical", brand: "redragon", price: 2700, rating: 4.5 },
    { id: 19, name: "mouse", type: "wireless", brand: "hp", price: 650, rating: 4.1 },
    { id: 20, name: "laptop", type: "envy", brand: "hp", price: 43000, rating: 4.0 }
  ];
  
// to get the whole list of products 
app.get('/products', (req, res)=>{
    if (!products){
        res.status(404).json({message:"products not found to be shown"})
    };
    res.status(200).json({
        message: "products accessed to be shown",
        data: products
    })
});


//to filter through products
app.get('/products/filter', (req, res)=>{
    const {name, type, max_price} = req.query;

    if(!name||!type||!max_price){
        res.status(400).json({messgae:"missing fields"});
    };

    const result = products.filter(product =>
        product.name === name &&
        product.type === type &&
        product.price <= Number(max_price)
        );

    if(result.length === 0){
        res.status(404).json({message:"no matches found"})
    }

    res.status(200).json({
        message:"matches found",
        data: result
    });
});

// to sort products 
app.get('/products/sort', (req, res)=>{
    const {basis, order} = req.query;
    if (!basis || !order){
        res.status(400).json({message:"missing values to sort"})
    };

    let result = null;
    if (order === "ascending"){
        result = products.sort((a, b)=> a[basis] - b[basis]);
    } else if (order === "descending"){
        result = products.sort((a, b)=> b[basis] - a[basis]);
    };

    if (!results){
        res.status(404).json({messgae:"sorted results don't exist"})
    }
    
    res.status(200).json({
        message: `sorted on the basis of ${basis} in ${order} order`,
        result: result
    })
});

// to get just a single product
app.get('/products/:id', (req, res)=>{
    const idx = parseInt(req.params.id);

    const product = products.find(p=> p.id === idx);

    if (!product){
        res.status(404).json({message:"specific product not found to be shown"})
    };

    res.status(200).json({
        message: "specific product accessed to be shown",
        data: product
    });
});

//adding a product
app.post('/products/new', (req, res)=>{
    const {name, type, price} = req.body;

    if (!name || !type || !price){
        res.status(400).json({message:"missing fields"})
    };

    const newId = products[products.length-1].id + 1;

    products.push({id: newId, name: name, type:type, price:price});
    
    res.status(201).json({
        message: "product created", 
        data: {name, type, price}
    })
});

//edit a product
app.put('/products/:id', (req, res)=>{
    const idx = parseInt(req.params.id);    
    
    if (!idx){
        res.status(400).json({message: "missing fields"});
    };

    const product = products.find(p=> p.id === idx);

    if (!product){
        res.status(404).json({message: "product not found to be edited"});
    };

    const price = req.body.price;

    if (!price){
        res.status(400).json({messgae:"missing feilds"})
    };

    product.price = price;

    res.status(200).json({
        message: "edited product",
        data: {
            price:price,
            updated: product
        }
    });
});

// delete a product
app.delete('/products/:id', (req, res)=>{
    const idx = parseInt(req.params.id);

    if(!idx){
        res.status(400).json({messgae:"missing fields"});
    }

    const product = products.find(p=> p.id === idx);

    if (!product){
        res.status(404).json({message: "product not found to be deleted"});
    };

    const productIndex = products.indexOf(product);

    products.splice(productIndex, 1)

    res.status(200).json({
        message:"item deleted",
        data: product
    })
})



//fallback handler 
app.use((req, res)=>{
    res.status(404).json({message: "Route not found"})
})

//kickstarting the server at port 3000
app.listen(port, ()=>{
    console.log('aal iz wel')
});