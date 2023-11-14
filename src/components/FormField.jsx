import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const FormField = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleBlur = () => {
    if (!isValidEmail(email)) {
      setError("Valid Email Required");
    } else {
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Valid Email Required");
    } else {
      setLoading(true);

      setTimeout(() => {
        localStorage.setItem("userEmail", email);
        navigate("/success");
        setLoading(false);
      }, 3000);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (error) {
      setError(null);
    }
  };

  const inputStyle = {
    backgroundColor: error ? "#f2ddda" : "",
    color: error ? "#ed614c" : "",
    borderColor: error ? "#FF0000" : "",
  };

  return (
    <div>
      <form
        className="mt-10 flex text-sm flex-col w-full gap-3 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between">
          <label htmlFor="emailAddress" className="font-bold">
            Email Address
          </label>
          <span className="mr-2">
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
          </span>
        </div>
        <input
          className={
            "border-secondary-color focus:border-primary-color border-2 max-w-md rounded-md px-2 py-4"
          }
          style={inputStyle}
          type="email"
          name="emailAddress"
          placeholder="email@company.com"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <PrimaryButton
          title="Subscribe to monthly newsletter"
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default FormField;
