function demo(input) {

   
     for (let i=1; i<=e;i++){
        let e=''
        
       for(let f=1; f<=10; f++) 


       console.log(i);
     }
     
}
demo()
function generateNumberPyramid(rows) {
    let currentNumber = 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += currentNumber + ' ';
            currentNumber++;
        }
        console.log(row);
    }
}
generateNumberPyramid([1])