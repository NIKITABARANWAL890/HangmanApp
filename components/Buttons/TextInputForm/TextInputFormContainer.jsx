import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password"); // State for toggling the input type

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log("Form submitted with value");
  }

  function handleTextInputChange(event) {
    const value = event.target.value;
    console.log("Text input changed:", value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked");
    if(inputType === "password"){
        setInputType("text");
    }else{
        setInputType("password");
    }
  }

  return (
    <TextInputForm
      handleSubmitForm={handleSubmitForm}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
      inputType={inputType} // Pass the input type
    />
  );
}

export default TextInputFormContainer;
