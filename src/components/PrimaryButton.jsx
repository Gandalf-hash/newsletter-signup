import Loader from "./Loader";
const PrimaryButton = ({ title, type, disabled }) => {
  return (
    <button
      className={`rounded-md w-full focus:outline-none h-16 max-w-md mt-4 font-bold px-2 py-4 bg-primary-color text-text-color ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      type={type}
      disabled={disabled}
    >
      {disabled ? <Loader /> : title}
    </button>
  );
};
export default PrimaryButton;
