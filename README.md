# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
   - [The challenge](#the-challenge)
   - [Screenshot](#screenshot)
   - [Links](#links)

- [My process](#my-process)
   - [Built with](#built-with)
   - [What I learned](#what-i-learned)
   - [Continued development](#continued-development)
   - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
   - The field is left empty
   - The email address is not formatted correctly

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot 2023-11-03 at 08-12-41 Frontend Mentor Newsletter sign-up form with success message](https://github.com/Gandalf-hash/newsletter-signup/assets/53972152/97e4502a-7ed9-451c-92f8-a25d728d34a8)


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/newslettersignup-lGYEO5wPNS)
- Live Site URL: (https://newsletter-signup-cyan.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - For navigation

### What I learned

In this project, I have learned how to build a user-friendly and functional web application with React, implement client-side routing, use local storage to store user data, and ensure proper email validation and error handling.

```html
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
<PrimaryButton title="Subscribe to monthly newsletter" type="submit" />
</form>

```

```css
button:hover {
  background-image: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

```

```js
const handleSubmit = (e) => {
  e.preventDefault();

  if (!isValidEmail(email)) {
    setError("Valid Email Required");
  } else {
    localStorage.setItem("userEmail", email);
    navigate("/success");
  }
};

```

### Continued development

I'd like to continue focusing on refining my responsive design skills, particularly in optimizing the layout for tablets, as I've identified areas in this project where improvements can enhance the user experience on these devices.

### Useful resources

- [react-router-dom](react-router-dom) - This helped me set up the react-router for navigation
- [Tailwind CSS Setup & Example](https://medium.com/the-untyped-club/tailwind-css-1-9-setup-examples-for-beginners-fbfb18646bc8) - This is an amazing article which helped me setup the Tailwind configuration file along with the necessary classes

## Author

- Website - [Newsletter Signup Preview Page](https://newsletter-signup-cyan.vercel.app/)
- Frontend Mentor - [@Gandalf-hash](https://www.frontendmentor.io/profile/Gandalf-hash)
- LinkedIn - [@Tshepiso J. Phetoane](https://www.linkedin.com/in/tshepiso-johannes/)

## Acknowledgments

I would like to express my appreciation to my mentors and the online developer community for their guidance and resources, which were invaluable in completing this project independently
