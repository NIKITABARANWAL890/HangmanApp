import getStyleType from "./getStyle";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-4 py-4 ${getStyleType(styleType)} text-white bg-red-400`}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
