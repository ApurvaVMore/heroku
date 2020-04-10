const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");

const app= express();
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(express.static("public"));
app.listen(process.env.PORT || 3000,function(req,res)
{
    console.log("connected to port 5000");

});

app.get("/",function(req ,res)
{
    res.sendFile(__dirname +"/signup.html");

});




//app.get
//d29cd8e2acefff672501085439b75bf-us19
  //  d7649a1ce9

app.post("/",function(req,res)
{


    var firstname=req.body.input2;
   var lastname=req.body.input3;
   var email=req.body.input1;

   console.log(firstname);
   console.log(lastname);
   console.log(email);




   var data=
    {
        members:
        [ 
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstname,
                    LNAME: lastname
                }

            }
        ]
    }
    var jsonData=JSON.stringify(data);
    var option = {
        url: "https://us19.api.mailchimp.com/3.0/lists/d7649a1ce9",
        method: "POST",
        headers: {
            "Authorization":"Apurva 0bb6f2e925a756dbb7cd954ed9a1dc13-us19"
        },
        body: jsonData
    };

    request(option,function(error,response,body)
    {
        if(error){
            res.send("sorry !!!! please try again");
        }
        else if(response.statusCode==200){
            res.send("subscription added successfully!!!!");

        }
        else{
            res.send("sorry !!!! please try again");

        }

    });


});

    


