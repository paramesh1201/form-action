function validationform(){
    var fname=document.val.fname.value;
    var city=document.val.city.value;
    var phone= document.val.phone.value;
    var address=document.val.address.value;

    if(fname.length<2){
        alert("First Name should be more than 2 letters");
        return false;

    }
    else if(city.length<2){
        alert("enter a valid City name");
        return false;
    }
    else if(phone.length!==10){
        alert("Enter a valid phone number");
        return false;
}
else if(address.length<10){
    alert("Enter a valid address");
    return false;
    }

}