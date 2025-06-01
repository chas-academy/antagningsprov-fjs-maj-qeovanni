function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
    let bigEven = []
    let smallOdd = []
    let other = []

    for(let i=0;i<numbers.length;i++){
      if (numbers[i] > 10 && numbers[i] % 2 === 0){
        bigEven.push(numbers[i])
      }else if (numbers[i] < 10 && numbers[i] % 2 === 1){
        smallOdd.push(numbers[i])
        }else {
          other.push(numbers[i])
        }
      }
      let arrays = {bigEven, smallOdd, other}
      
      
      
              return arrays 
    }
  

  

  
  module.exports = { uppg10 };
