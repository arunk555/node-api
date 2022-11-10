const http=require("http");
const fs=require("fs");
const app=http.createServer((req,res)=>{
    fs.readFile("student.json",(err,data)=>{
        if(err) throw err;
        console.log(JSON.parse(data));
    });

    let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
     
    let data = JSON.stringify(student, null, 2);

    fs.writeFile('student.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.end();
}).listen(5000,function(){
    console.log("Express server listening on port %d", this.address().port);
});