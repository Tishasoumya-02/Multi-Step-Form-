const validate=(input)=>
{
    const errors={};
if(!input.firstname)
{
    errors.email="Cannot be empty";
}
if(typeof input.firstname !== "undefined"){
    if(!input.firstname.match(/^[a-zA-Z]+$/)){
       
       errors.firstname = "Only letters";
    }        
 }
 if(!input.lastname)
{
    errors.email="Cannot be empty";
}
if(typeof input.lastname !== "undefined"){
    if(!input.lastname.match(/^[a-zA-Z]+$/)){
       
       errors.lastname = "Only letters";
    }        
 }
 if(!input.gender)
{
    errors.email="Cannot be empty";
}

 return errors;
}

export default validate;
