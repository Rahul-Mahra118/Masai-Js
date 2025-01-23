let greetUser= function(){
      let fname= prompt("Enter the name-> ");
    if(!fname){
      fname="Guest"
    }
      console.log(`Hello, ${fname}!`)
  
    
}

greetUser()