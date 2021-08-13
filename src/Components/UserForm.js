//eslint-disable-next-line
import react ,{useState} from "react";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import ProfilePic from "./ProfilePic";
import Confirm from "./Confirm";
import Image from "../Components/Image"
function UserForm()
{
  

    //use-state for validations in form
     const [error,setError]=useState({
        firstnameError:'',
        lastnameError:'',
        genderError:'',
        cityError:'',
        stateError:'',
        mobileError:'',
        emailError:'',
        addressError:'',
        imageError:''
       
     });
     //use-state for steps for multi-step-form 
    const [step,setStep]=useState(1);
    //use-state for image for uploading picture form
    const [image, setImage] = useState({ preview: "", raw: "" });
   
    //use-state for different values input in the multi-step-form
    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        gender:'',
        city:'',
        state:'',
        mobile: '',
        email: '',
        address:''

     });
     //Validation function
     const Validate=()=>
     {
         let isError=false;
         const errors={
            firstnameError:'',
            lastnameError:'',
            genderError:'',
            cityError:'',
            stateError:'',
            mobileError:'',
            emailError:'',
            addressError:'',
             imageError:''
         
         }
         if(step===1)
         {
            if(values.firstname.length<1)
            {
                isError=true;
                errors.firstnameError="Please enter your first name";
            }
            if(values.lastname.length<1)
            {
                isError=true;
                errors.lastnameError="Please enter your last name";
            }
            if(values.gender.length<1)
            {
                isError=true;
                errors.genderError="Please enter your gender";
            }

         }
         if(step===2)
         {
            if(values.email.indexOf('@')===-1 || values.email.length<2)
            {
                isError=true;
                errors.emailError="Please enter a valid email address";
            }
            
            if(values.mobile.length > 10 || values.mobile.length<10)
            {
                isError=true;
                errors.mobileError="Please enter a valid 10 digit phone number";
            }
            if(values.city.length<1)
            {
                isError=true;
                errors.cityError="Please enter your city";
            }
            if(values.state.length<1)
            {
                isError=true;
                errors.stateError="Please enter your state";
            }
            if(values.address.length<1)
            {
                isError=true;
                errors.addressError="Please enter your Address";
            }

         }
         if(step===3)
         {
             console.log(image.raw.type);
            if (!image.preview) {
                isError=true;
                errors.imageError="Please Upload a Picture";
             console.log('image is required');
           
 }

         }
        setError(errors);
        return isError;

     }
     //Validation function completes

     //Next-Step Functionality if step<=3 we increase the step
     const nextStep=()=>
     {
         if(step<=3)
         {
            const err=Validate();
            if(!err)
            {
                setError(

                    {
                        firstnameError:'',
                        lastnameError:'',
                        genderError:'',
                        cityError:'',
                        stateError:'',
                        mobileError:'',
                        emailError:'',
                        addressError:'',
                        imageError:''
                       
                    }
                )
            setStep(step+1);
         }
        }
        //Last step from reached
         else if(step===4)
         { 
             console.log("Done")
         }
     
     };

     //Previous Step functionality if steps are greater than 1
     const prevStep=()=>
     { const err=Validate();

         if(step>1)
         {
             if(!err)
            setStep(step-1);
         }
         
     };

    
     //handlePic function

           const handleChangePic=e=>
           {
            if (e.target.files.length) {   
              setImage({
                 preview: URL.createObjectURL(e.target.files[0]),
                  raw: e.target.files[0]
          });
        }
       
           }


     const handleChange=(name)=>(e)=>
     {
         setValues({
             ...values,
             [name]:e.target.value
         });
      
     }
     const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };
    
   
     const value={...values}
     console.log(error);
     console.log(image);
     const headings=
     {
         personal:"Personal-Details",
         contact:"Contact-Details",
         profile:"Upload Profile Picture",
         confirm:"Confirmation Page"
     }
//Box-Shadow Style
     const shadowstyle={
        boxShadow: " -17px -14px 162px -17px rgba(2,15,11,0.75);",
        webkitBoxShadow: "-17px -14px 162px -17px rgba(2,15,11,0.75)",
        mozBoxShadow: "-17px -14px 162px -17px rgba(2,15,11,0.75)"
     }
  

     //Design for Form
    return(
        <div className="bg-primary "  style={{padding:"50px"}}>
         
                <div className="card mb-3 animate__animated animate__bounce" style={shadowstyle} >
                <div className="row no-gutters px-3">
                    
                    
                    <div className="col-md-4 " >
                        <Image />
                    </div>

                    <div className="col-md-8 ">
                        
                    {
                       
                        {
                            1:<PersonalDetails handleChange={handleChange} value={value}  error={error} heading={headings} />,
                            2:<ContactDetails handleChange={handleChange} value={value} error={error} heading={headings}/>,
                            3:<ProfilePic handleChangePic={handleChangePic}  handleUpload={handleUpload} values={image} error={error} heading={headings} />,
                            4:<Confirm handleChange={handleChange} value={value} values={image} heading={headings} />
                        }[step]
                    }
                    <div className="d-flex justify-content-around  " style={{padding:"3rem" }}>
                        {step>1?(
                            <button className="btn btn-danger" onClick={prevStep} >
                                Previous
                            </button>
                        ) : null}
                         
                     
                        {step<=3 ? <button className="btn btn-success" onClick={nextStep} style={{width:"6rem"}}>
                            {step===3 ? 
                            "Confirm" 
                            : "Next"}
                        </button>
                        :null}
                        
                      
                    </div>
                </div>
                <div className="bg-dark">
                 
                </div>
                </div>
                </div>
                </div>
         
         
        
    )

}

export default UserForm;