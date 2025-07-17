const rua = "    Rua    da     batata";
const bairro = "centro"
const xablau = rua + bairro
const filtro = "rua   da  batatacentro"

const str = "Hello";
const asciiArray = rua.split('').map(char => char.charCodeAt(0));
console.log(asciiArray)
const ruaTrim = [];
for (let index = 0; index < asciiArray.length; index++) {
    const element = asciiArray[index];
    if (element !== 32){
        ruaTrim.push(element)
    }
    
}
console.log(String.fromCharCode(...ruaTrim));
console.log(filtro);

