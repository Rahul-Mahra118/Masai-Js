function fetchData(){
    let promise = new Promise((res,rej)=>{
        setTimeout(()=>{
           let random= Math.random();
           if(random>0.5){
            res("fetched Data succesfully")
           }
           else{
            rej("error at fetching data")
           }
        },2000)
    })
    return promise;
 }
// fetchData()
// .then((response)=>{
//     console.log(response)
// })
// .catch((err)=>console.log(err))


//Create an Async Handler Function

async function fetchDataHandler(){
    try{
        const response=await fetchData();
        console.log(response)
    }
  catch(err){
    console.log(err)
  }
}
console.log("fetching Data......")
fetchDataHandler()
fetchDataHandler()
fetchDataHandler()