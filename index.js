const app=require("./app");
const {API_PORT}=process.env;

app.listen(API_PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});