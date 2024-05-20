const http = require('http')

const server = http.createServer((req, res) => {
    const opcao = req.url

    switch (opcao) {
        case '/historia':
            res.end(`
                 <html><body>Historia da fatec sorocaba</body><html>
            `)
            break;
        case '/cursos':
            res.end(`
                    <html><body>Cursos</body><html>
            `)
            break;
    
        default:
            res.end("<html><body>Site da fatec sorocaba</body><html>")
            break;
    }

})



server.listen(3000)