const person = [
    {name: "moha" , age :25 , city:"Wonderland"}, 
    {name: "bob" , age :23 , city:"Mogdisho"}, 
    {name: "Ali" , age :15 , city:"Hargeysa"}
]
 console.log("Proporties and Value of each person")
for(let p of person){
    console.log("---")
    for(let key in p){
           console.log(key + ": " +p[key]);
    }
}