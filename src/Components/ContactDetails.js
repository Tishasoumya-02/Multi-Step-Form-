//eslint-disable-next-line
import react from "react";
import {Form } from "react-bootstrap";

function ContactDetails(props)
{
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 style={{paddingTop:"4.6rem", PaddingBottom:"5rem" }}>Registeration Form :<br /> {props.heading.contact}</h2>
        <Form.Group className="w-75 mt-4">
        <span className="pull-right text-danger"><small>{props.error.emailError?<i class="fa fa-exclamation-circle">{props.error.emailError}</i>:null}</small></span>
        <Form.Control 
        type="email"
        placeholder="Email"
        onChange={props.handleChange("email")}
        name="email"
        defaultValue={props.value.email}
     
        />
        
       </Form.Group>
       <Form.Group className="w-75 mt-4">
       <span className="pull-right text-danger"><small>{props.error.mobileError?<i class="fa fa-exclamation-circle">{props.error.mobileError}</i>:null}</small></span>
        <Form.Control 
        type="number"
        placeholder="mobile"
        onChange={props.handleChange("mobile")}
        name="mobile" 
        defaultValue={props.value.mobile}
      
        />
        
       </Form.Group>
       <Form.Group className="w-75 mt-4">
       <span className="pull-right text-danger"><small>{props.error.cityError?<i class="fa fa-exclamation-circle">{props.error.cityError}</i>:null}</small></span>
        <Form.Control 
        type="text"
        placeholder="city"
        onChange={props.handleChange("city")}
        name="city"
        defaultValue={props.value.city}
      
        />
      
       </Form.Group>
       <Form.Group className="w-75 mt-4">
       <span className="pull-right text-danger"><small>{props.error.stateError?<i class="fa fa-exclamation-circle">{props.error.stateError}</i>:null}</small></span>
        <select name="state" id="state" class="form-control" onChange={props.handleChange("state")} defaultValue={props.value.state}  >
        <option value="">--Please choose a state--</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
       </Form.Group>
       <Form.Group className="w-75 mt-4">
       <span className="pull-right text-danger"><small>{props.error.addressError?<i class="fa fa-exclamation-circle">{props.error.addressError}</i>:null}</small></span>
        <Form.Control 
        type="text"
        placeholder="address"
        onChange={props.handleChange("address")}
        name="address"
        defaultValue={props.value.address}

        />
        
       </Form.Group>

       
       </div>
    );
}

export default ContactDetails;