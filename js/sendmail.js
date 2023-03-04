var count = 0;
function validateName(){
    var name = document.getElementById("contactName").value;
     
    if(name.length==2){
        namep.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is')){
        namep.innerHTML = 'Write full name'
        return false;
    }
    namep.innerHTML= 'ok';
    return true;
}
function validate() {
    document.getElementById("submit-loader").style.display = "none";
    var name = document.getElementById("contactName").value;
    if (name.length < 4) {
        document.getElementById("namep").innerHTML = "Please Enter at least 4 Characters"
    }
    
    else {
        document.getElementById("namep").innerHTML = " "
        count = 1;
    } 
    var email = document.getElementById("contactEmail").value;
    if (email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
        document.getElementById("emailp").innerHTML = " "
        count = 2
    }
    else {
        document.getElementById("emailp").innerHTML = "Enter a valid Email address"
    }
    var sub = document.getElementById("contactSubject").value;
    if (sub.length < 10) {
        document.getElementById("subp").innerHTML = "Please enter at least 10 characters"
    }
    else {
        document.getElementById("subp").innerHTML = " "
        count = 3
    }
    var msg = document.getElementById("contactMessage").value;
    if (msg.length<10) {
        document.getElementById("msgp").innerHTML="Please enter atleast 10 characters"
    }
    else{
        document.getElementById("msgp").innerHTML=""
        count = 4
    }
    console.log(count)

}

function send(){

    if(count==4){
        
          $("#contactForm").submit((e)=>{
           e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzCd0yTip_xJuhtkq1YSUh1KxWBxHfJ7aWfpId4z31uPRp-QaqgNWFNw5DpJNud3Ul4/exec",
                data:$("#contactForm").serialize(),
                method:"post",
                beforeSend:function(){
                    document.getElementById("submit-loader").style.display="block";
                },
                success:function (){
                document.getElementById("submit-loader").style.display="none";
                document.getElementById("success").style.cssText="display:block"; 
                document.getElementById("success").innerHTML="Your Message has send succesfully"; 
                
                setTimeout(function(){
                 window.location.reload()   
              } ,3000)
                
                },
                error:function (err){
                    document.getElementById("submit-loader").style.display="none";
                    document.getElementById("success").style.display="block";
                    document.getElementById("success").innerHTML="Something went wrong, Try again";
                    setTimeout(function(){
                        window.location.reload()   
                     } ,3000)
                }
            })
         })  
    }else{
        document.getElementById("submitform").style.cssText="display:block; background-color: red;"   
        document.getElementById("submitform").innerHTML="Please fill all fields"; 
    }
}