const http=require("http");
const dt=require("./myFModule");
const app=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.write("\n");
    res.write("current data is "+dt.myDateTime1());
    res.end();
});
app.listen(8080);