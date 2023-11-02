const PrimaryButton = ({ title, type }) => {
  return (
    <button
      className="rounded-md w-full max-w-md mt-4 font-bold px-2 py-4 bg-primary-color text-text-color"
      type={type}
    >
      {title}
    </button>
  );
};
export default PrimaryButton;
