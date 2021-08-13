//eslint-next-line-disable
import react from "react";

function Confirm(props) {
  return (
    <div>
      <h2 style={{ paddingTop: "5rem", PaddingBottom: "5rem" }}>
        Registeration Form :<br /> {props.heading.confirm}
      </h2>
      <img
        src={props.values.preview}
        alt="dummy"
        width="100"
        height="100"
        style={{ borderRadius: "100%" }}
      />
      <div>
        <br />
        <div style={{ paddingBottom: "1rem", fontWeight: "bolder" }}>
          👋 Hello {props.value.firstname + props.value.lastname}
          <br />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            {" "}
            The Details you have entered are-
            <br />
            <br />
          </div>
          <ul style={{ textAlign: "left", paddingBottom: "1rem" }}>
            <li>Email-{props.value.email}</li>
            <li>Gender-{props.value.gender}</li>
            <li>State-{props.value.state}</li>
            <li>City-{props.value.city}</li>
            <li>Home Address-{props.value.address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Confirm;
