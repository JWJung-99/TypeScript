import PropTypes from "prop-types";

function Button({
  children,
  bgColor = "gray",
  btnSize = "sm",
  type = "button",
  ...rest
}) {
  const btnColor = {
    gray: "bg-gray-500 hover:bg-gray-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  const size = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2 px-6 text-lg",
  };

  return (
    <button
      className={`${btnColor[bgColor]} ml-2 ${size[btnSize]} text-white rounded`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  btnSize: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
