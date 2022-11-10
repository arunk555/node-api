const http=require("http");
const nodemailer=require("nodemailer");
http.createServer((req,res)=>{
    let transporter = nodemailer.createTransport({
        // This is the SMTP mail server to use for notifications. 
        // GCDS uses this mail server as a relay host.
        pool: true,
        host: "smtp.gmail.com",
            port: 465,
            secure:true,
            debug:true,
            logger:true,
            tls:{
                rejectUnauthorized: false
            },
        auth: {
            // Your full email address
            user: "arunkurusev@volunteer.heartfulness.org",
            // Your Gmail password or App Password
            pass: "QAZmlp!@3"
        }
    });


const mailoption={
    from: 'arunkurusev@volunteer.heartfulness.org',
    to: 'aruncse07@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail(mailoption,function(error,info){
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

}).listen(8080,function(){
    console.log("Express server listening on port %d", this.address().port);
});
