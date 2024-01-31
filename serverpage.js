let http = require("http")
let fs = require("fs")
let dir = "./public/"
let port = 3000

http.createServer(function(request,response){
  if(request.url === '/'){
    render(response,'homepage.html')
  }
  else if(request.url === '/about'){
    render(response,'about.html')
  }
  else if(request.url === '/contact'){
    render(response,'contact.html')
  }
  else{
    response.writeHead(404,{"content-type":"text/html"})
    response.write('<h1> 404 page not found </h1>')
  }
}).listen(function(){console.log("http://localhost:${port}")})

let render = function(response,file){
  console.log(dir+file) 
  fs.readFile(dir+file,function(error,data){
    if(error){
      response.writeHead(404,{"content-type":"text/html"})
      response.write("<h1> 404 error reading file </h1>")
    }
    if(data){
      response.writeHead(200,{"content-type":"text/html"})
      return response.end(data)
    }
  })
}
