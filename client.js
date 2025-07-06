const axios = require('axios'); //import axios library
const url = 'http://localhost:3000' //set a url just to make it shortcut

// basic methods 

async function getProducts(){
    try{
        const response = await axios.get(`${url}/products`);

        console.log(response.data);

    } catch(err){
        console.error('there was an error', err);
    };
};

async function getSingleProduct(id){
    try{
        const product = await axios.get(`${url}/products/${id}`);

        console.log(product.data)

    }catch(err){
        console.error('there was an error', err);
    };
};

async function newProduct(){
    try{
        const product = await axios.post(`${url}/products/new`, {
            name:"keyboard",
            type: "hp",
            price:1500
        });

        console.log(product.data)

    }catch(err){
        console.error('there was an error', err);
    };
};

async function editProduct(id, price){
    try{
        const response = await axios.put(`${url}/products/${id}`, {
            price:price
        })

        console.log(response.data)

    }catch(err){
        console.error('there was an error', err);
    };
};

async function deleteProduct(id){
    try{
        const deleted = await axios.delete(`${url}/products/${id}`)

        console.log(deleted.data)

    }catch(err){
        console.error('there was an error', err);
    };
};

// intermediate requests

async function onlyGetProducts(name, type, max_price){
    try{
        const response = await axios.get(`${url}/products/filter`, {
            params:{
                name:name,
                type:type,
                max_price:max_price
            }
        });

        console.log(response.data)
    }catch(err){
        console.error("there was an error", err)
    };
};


// function calls

// basic methods 

// getProducts();
// getSingleProduct(3)
// newProduct()
// editProduct(3, 700)
// deleteProduct(1)

// intermediate requests
onlyGetProducts("mouse", "wireless", 1000)
