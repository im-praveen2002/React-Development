function Factorial(x){

    if (x<2){
        return x 
    }

    return x* Factorial(x-1);
}


console.log(Factorial(3));