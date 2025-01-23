function calculatePrice(){
   let  price= parseFloat(prompt("Enter the price-> "))
   let discount=parseFloat(prompt("Enter the discount-> "))
//    if there will empty input or non numeric then variable will hold the falsy value.
   if(price<=0|| discount<0|| !price ||!discount){
    console.log(" Wrong Input try Again.")
     
   }
   else{
   let calculatedDiscount= discount/100;
   let finalPrice= price -(price*calculatedDiscount);
   console.log(finalPrice);
}
}