function outer(){
    let message= "Hello";
    return function (){
       console.log(message)
    }
}

let inner= outer();
inner()