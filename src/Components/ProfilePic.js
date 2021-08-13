//eslint-disable-next-line
import react from "react";
import {Form} from "react-bootstrap"
function ProfilePic(props)
{
   

    return(
        <div className="d-flex flex-column align-items-center">
            <h2 style={{paddingTop:"5rem", PaddingBottom:"5rem"}}>Registeration Form :<br /> {props.heading.profile}</h2>
            
        <div>
        <span className="pull-right text-danger"><small>{props.error.imageError?<i class="fa fa-exclamation-circle">{props.error.imageError}</i>:null}</small></span>
      <label htmlFor="upload-button">
        {props.values.preview ? (
          <img src={props.values.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <h5 className="text-center">Upload your photo</h5>
            <input
        type="file"
        id="upload-button"
        accept="image/*"
        onChange={props.handleChangePic}
      />
          </>
        )}
      </label>
      
      <br />
      <button onClick={props.handleUpload}>Upload</button>
    </div>
            </div>
    );
}

export default ProfilePic;