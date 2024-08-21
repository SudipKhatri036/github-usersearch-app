import "./errormsg.css";

function Errormsg({ errorMsg }) {
  return (
    <div className="error-msg-cont">
      <p>{errorMsg}</p>
    </div>
  );
}

export default Errormsg;
