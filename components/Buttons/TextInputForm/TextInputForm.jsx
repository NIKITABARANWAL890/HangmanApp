import Button from "../Button";
import TextInput from "../textInput/TextInput";

function TextInputForm({ handleSubmitForm, handleTextInputChange, handleShowHideClick, inputType }) {
    return (
      <form onSubmit={handleSubmitForm}>
        <div>
          <TextInput
            label="Enter a word or a phrase"
            placeholder="Enter a word or a phrase here..."
            type={inputType}
            onChangeHandler={handleTextInputChange}
          />
        </div>
        <div>
          <Button
            styleType="warning"
            text="Show/Hide"
            onClickHandler={handleShowHideClick}
          />
        </div>
        <div>
          <Button
            type="submit"
            styleType="primary"
            text="Submit"
          />
        </div>
      </form>
    );
  }
  
export default TextInputForm;