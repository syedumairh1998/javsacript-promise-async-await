const myPromise = () => new Promise((resolve,reject)=>{
    let flag = false
    if(flag){
       return resolve('Resolve called')
    }
    return reject('Reject called')
})

const myFunction = async () =>{
    try {
        const data = await myPromise()
        console.log('data =======================>',data)
    }
    catch(error){
        console.log('error =======================>',error)
    }
}


myFunction()



// another way

myPromise().then(result=>console.log(result))
.catch(error=>console.log(error))
