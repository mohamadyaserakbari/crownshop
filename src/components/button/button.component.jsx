// Type of Button's in project >>> Primary Color BTN || Secondry Color BTN || Google BTN
import '../button/button.style.scss';

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  secondry: "secondry",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
