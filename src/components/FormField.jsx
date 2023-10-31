import React from 'react';

function FormField() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBlur = () => {
    if (!isValidEmail(email)) {
      setError('Valid Email Required');
    } else {
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputStyle = {
    backgroundColor: error ? '#f2ddda' : '',
    color: error ? '#ed614c' : '',
    borderColor: error ? "#FF0000" : ""
  };

  return (
    <form className="mt-10 flex text-sm flex-col w-full gap-3 " onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between">
        <label htmlFor="emailAddress" className="font-bold">
          Email Address
        </label>
        <span className="md:mr-10">{error && <h2 style={{ color: 'red' }}>{error}</h2>}</span>
      </div>
      <input
        className={`border-secondary-color focus:border-primary-color border-2 max-w-md rounded-md px-2 py-4`}
        style={inputStyle}
        type="email"
        name="emailAddress"
        placeholder="email@company.com"
        value={email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
       <button className='rounded-md w-full max-w-md mt-4 font-bold px-2 py-4 bg-primary-color text-text-color'>
                Subscribe to monthly newsletter
        </button>
    </form>
  );
}

export default FormField;
