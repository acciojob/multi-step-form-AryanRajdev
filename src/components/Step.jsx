import React from "react";
import "./../styles/Step.css";

const Step = ({ currentStep, setCurrentStep }) => {

  function handleNext(from,to) {
    if(from === "customer" && to === "car"){
      setCurrentStep("car")
    }
    else if(from === "car" && to === "card"){
      setCurrentStep("card")
    }
  }

  function handlePrevious(from) {
    if(from === "car"){
      setCurrentStep("customer")
    }
    else if(from === "card"){
      setCurrentStep("car");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your form has been Submitted");
  }

  return (
    <div className="main">

      {currentStep === "customer" && (
        <form className="design">
          <h1>Customer Details</h1>
          <label>First Name:</label>
          <input type="text" id="first_name" />
          <br />
          <label>Last Name:</label>
          <input type="text" id="last_name" />
          <br />
          <button type= "button" onClick={()=>handleNext("customer","car")}>Next</button>
        </form>
      )}

      {currentStep === "car" && (
        <form className="design">
          <h1>Car Details</h1>
          <label>Brand:</label>
          <input type="text" id="model" />
          <br />
          <label>Model:</label>
          <input type="text" id="car_price" />
          <br />
          <button type= "button" style={{ marginRight: "50px" }} onClick={() => handlePrevious("car")}>
            Previous
          </button>
          <button type = "button" onClick={() => handleNext("car","card")}>Next</button>
        </form>
      )}

      {currentStep === "card" && (
        <form className="design" onSubmit={handleSubmit}>
          <h1>Payment Details</h1>
          <label>Credit Card Number:</label>
          <input type="number" id="card_info" />
          <br />
          <label>Expiry Date:</label>
          <input type="date" id="expiry_date" />
          <br />
          <button type="button" style={{ marginRight: "50px" }} onClick={() => handlePrevious("card")}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </form>
      )}

    </div>
  );
};

export default Step;
