let arr = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

function processProduct(arr){
    let nameArray= arr.map(product=> product.name);
    console.log(nameArray)
    arr.forEach(product=>{
        product.price>50? console.log(`${product.name} is above $50`):console.log(`${product.name} is below $50`)
    })
}

processProduct(arr)