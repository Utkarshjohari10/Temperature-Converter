const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("main");
});


app.post("/",function(req,res){
    const temp=req.body.const;
    const ch1=req.body.tempSelect1;
    const ch2=req.body.tempSelect2;
    let result=0;
    
    if((ch1==="Fahrenheit" && ch2==="Fahrenheit") || (ch1==="Celsius" && ch2==="Celsius") || (ch1==="Kelvin" && ch2==="Kelvin")){
        result=temp;
    }else if(ch1==="Fahrenheit" && ch2=="Celsius"){
        result=(temp-32)*(5/9);
    }else if(ch1==="Fahrenheit" && ch2==="Kelvin"){
        result=(temp-32)*(5/9) +273.15;
    }else if(ch1==="Celsius" && ch2==="Fahrenheit"){
        result=temp*(9/5)+32;
    }else if(ch1==="Celsius" && ch2==="Kelvin"){
        result=temp+273.15;
    }else if(ch1==="Kelvin" && ch2==="Fahrenheit"){
        result=(temp-273.15)*(9/5)+32;
    }else if(ch1==="Kelvin" && ch2==="Celsius"){
        result=temp-273.15;
    }
        
    res.render("ans",{temperature1:temp,degree1:ch1,temperature2:result,degree2:ch2});
});





app.listen(3000,function(req,res){
    console.log("Server is running on the port 3000.")
});