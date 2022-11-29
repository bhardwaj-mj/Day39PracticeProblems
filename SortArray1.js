let randomNumberArray=[];
for(let i=0;i<10;i++){
  let randomNumber=Math.floor(Math.random()*900)+100;
  randomNumberArray[i]=randomNumber;
}
console.log(randomNumberArray);
let largestNumber = randomNumberArray[0]
let secondLargestNumber = randomNumberArray[9]
let smallestNumber = randomNumberArray[9]
let secondSmallestNumber = randomNumberArray[0]
for(element of randomNumberArray){
    if(element>largestNumber){
        secondLargestNumber = largestNumber
        largestNumber = element
    }else if(element>secondLargestNumber && element != largestNumber){
        secondLargestNumber = element
    }
    if(element<smallestNumber){
        secondSmallestNumber = smallestNumber
        smallestNumber = element
    }else if(element<secondSmallestNumber && element != smallestNumber){
        secondSmallestNumber = element
    }
}
console.log("Largest number is:",largestNumber)
console.log("Second largest number is:",secondLargestNumber)
console.log("Smallest number is:",smallestNumber)
console.log("Second smallest number is:",secondSmallestNumber)