const entrada = require('readline-sync');
const temperatura = entrada.questionFloat("\n Digite a temperatura:\n")
if (temperatura <= 60){
    console.log(`A temperatura ${temperatura} °C está normal: 😊`)
}else if  (temperatura <=80 ){
    console.log(`A temperatura ${temperatura} °C esta ATENÇÂO: 🧐`)
}else{
    console.log(`A temperatura ${temperatura} °C esta CRITICA: 😠`)
}