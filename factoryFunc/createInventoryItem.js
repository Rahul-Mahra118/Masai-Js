function createInventoryItem(name,category,price){
    let obj={}
    obj.name=name;
    obj.category=category;
    obj.price=price;
    obj.describeItem=function(){
        console.log(`Item:${this.name}, Category: ${this.category} , Price: ${this.price}`)
    }
    return obj;
}

const item= createInventoryItem("Laptop","Electronics",1500)

item.describeItem();

function addItemDiscount(item,discountPercent){
    let obj={}
    obj.name=item.name;
    obj.category= item.category;
    obj.price= item.price;
    
    obj.discountPrice= (item.price-(item.price*discountPercent)/100);

    obj.applyDiscount=function(){
        console.log(`Discounted Price for Laptop: ${this.discountPrice}`)
    }
  return obj;
}
const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
