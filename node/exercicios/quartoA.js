function Parte1(){
    for (let i = 0; i <= 10; i++) {
       console.log("primeira parte ", i)
    }
}

setTimeout(Parte1, 1000 * 2);// 2s

const fs = require('fs')

fs.readFile('file.txt', (err,data) => {
    const registros = data.toString().split('\n')

    registros.forEach((registro, index) => {
        console.log("segunda parte" + registro)
    })

    if(err)
        throw(err)
})