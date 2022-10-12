{/* <label for="firstnmae">firstname</label><br>
    <input type="firstname" name="" id="firstname"><br> */}
    

    function createlable(tagname,attrname,attrvalue,content){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML=content;
        return ele;
    }

    function linebreak(tagname){
       var ele=document.createElement(tagname);
       return ele;
    }

    function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }

    function linebreak(tagname){
        var ele=document.createElement(tagname);
        return ele;
     }

     function foo(){
        var res=document.getElementById("email").value;
    var res1=document.getElementById("pass").value;
    console.log(res,res1);
    
    if(res==='augustin2555@gmail.com' && res1=="12345")
    {
        console.log("He is a valid user");
    }else{
        console.log("Invalid user!");
  }
}
    

     

     var lable=createlable("label","for","firstname","Firstname");
     var br1=linebreak("br");

     var input=createinput("input","type","firstname","id","firstname")
     var br2=linebreak("br");

     var lable1=createlable("label","for","middlename","Middlename");
     var br3=linebreak("br");

     var input1=createinput("input","type","middlename","id","middlename");
     var br4=linebreak("br");

     var lable2=createlable("label","for","lastname","Lastname");
     var br5=linebreak("br");

     var input2=createinput("input","type","lastname","id","lastname");
     var br6=linebreak("br");

     var lable3=createlable("label","for","PhoneNumber","PhoneNumber");
     var br7=linebreak("br");

     var input3=createinput("input","type","PhoneNumber","id","PhoneNumber");
     var br8=linebreak("br");


 document.body.append(lable,br1,input,br2,lable1,br3,input1,br4,lable2,br5,input2,br6,lable3,br7,input3,br8);