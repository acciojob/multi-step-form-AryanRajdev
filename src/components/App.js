import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {

  const [currentStep , setCurrentStep] = useState("customer");

  return (
    <div>
      <Step currentStep ={currentStep} setCurrentStep = {setCurrentStep} />
    </div>
  )
}

export default App
