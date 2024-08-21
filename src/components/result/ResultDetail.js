import Loader from "../loader/Loader";
import Errormsg from "../errormsg/Errormsg";
import Result from "./Result";
import "./resultdetail.css";

function ResultDetail({ userDetails, isLoading, errorMsg }) {
  return (
    <div className="result-detail-container">
      {isLoading ? (
        <Loader />
      ) : errorMsg ? (
        <Errormsg errorMsg={errorMsg} />
      ) : (
        <Result userDetails={userDetails} />
      )}
    </div>
  );
}

export default ResultDetail;
