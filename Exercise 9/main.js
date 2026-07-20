let car ={
    make: "Toyoto",
    model: "Corolla",
    year: 2022 ,
    start : function(){
        console.log("The Car Has Started" , this.year)
    }
}

console.log(car.start());