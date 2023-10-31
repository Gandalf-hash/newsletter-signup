import React from 'react'

function FormField() {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)

    }
    return (
        <form className='flex items flex-col w-full gap-3 ' onSubmit={handleSubmit}>
            <label htmlFor="emailAddress" className='font-bold'>Email Address</label>
            <input
                className='border-secondary-color focus:border-primary-color border-2 max-w-md rounded-md px-2 py-4'
                type="email"
                name="emailAddress"
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
            />
        </form>
    )
}

export default FormField
