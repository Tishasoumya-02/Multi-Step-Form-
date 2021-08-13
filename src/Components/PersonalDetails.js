//eslint-disable-next-line
import react, { useState }  from "react";
import { Form } from "react-bootstrap";

function PersonalDetails(props)
{

  

    return(
     <div className="d-flex flex-column align-items-center">
         <h2 className="display-5" style={{paddingTop:"5rem", PaddingBottom:"5rem"}}>Registeration Form :<br /> {props.heading.personal}</h2>
        
         <Form.Group className="w-75 mt-4">
           <span className="pull-right text-danger"><small>{props.error.firstnameError?<i class="fa fa-exclamation-circle">{props.error.firstnameError}</i>:null}</small></span>
          <Form.Control 
          type="text"
          placeholder="FirstName"
          onChange={props.handleChange("firstname")}
          name="firstname" 
          defaultValue={props.value.firstname}
        
          />
         </Form.Group>
         <Form.Group className="w-75 mt-4">
         <span className="pull-right text-danger"><small>{props.error.lastnameError?<i class="fa fa-exclamation-circle">{props.error.lastnameError}</i>:null}</small></span>
          <Form.Control
          type="text" 
          placeholder="LastName"
          onChange={props.handleChange("lastname")}
          name="lastname" 
          defaultValue={props.value.lastname}
       
         />
         </Form.Group>
         <Form.Group className="w-75 mt-4">
         <span className="pull-right text-danger"><small>{props.error.genderError?<i class="fa fa-exclamation-circle">{props.error.genderError}</i>:null}</small></span>
         <select name="gender" id="gender" class="form-control" onChange={props.handleChange("gender")} defaultValue={props.value.gender}  >
        
         <option value="">--Please choose your gender--</option>
         <option value="Female">Female</option>
         <option value="Male">Male</option>
         <option value="Transgender">Transgender</option>
         <option value="Don't Wanna Tell">Don't Wanna Tell</option>
         
       
          </select>
         </Form.Group>
         
     </div>
    );
}

export default PersonalDetails;