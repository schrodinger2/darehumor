const http =  require('http')
const { readFileSync } = require('fs')

const css1 = readFileSync('./front/style.css')
const html1 = readFileSync('./front/site.html')
const js1 = readFileSync('./front/script.js')
const server = http.createServer()


http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    if(url === '/'){
        res.writeHead(200, { 'content-type': 'text/html'})
        res.end(html1)
    }
    else if (url === '/style.css'){
        res.writeHead(200, { 'content-type': 'text/css'})
        res.end(css1)
    }
    else if (url === '/script.js'){
        res.writeHead(200, { 'content-type': 'text/js'})
        res.end(js1)
    }
}).listen(8080)
