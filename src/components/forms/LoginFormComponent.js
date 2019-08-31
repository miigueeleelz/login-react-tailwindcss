import React, { useState } from 'react';

const LoginFormComponent = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLoginForm = (evt) => {
    evt.preventDefault();

    setErrors(errors => ({ ...validateCredentials(credentials) }));
  };

  const validateCredentials = (credentials) => {
    let errors = {};

    if (credentials.username === '') {
      errors = Object.assign(errors, {
        username: 'This field is required',
      });
    }

    if (credentials.password === '') {
      errors = Object.assign(errors, {
        password: 'This field is required',
      });
    }

    return errors;
  }

  const handleInputChange = (evt) => {
    evt.persist()
    setCredentials(credentials => ({ ...credentials, [evt.target.name]: evt.target.value }));
  }

  return (
    <form className="flex flex-wrap w-full" onSubmit={handleLoginForm.bind(this)}>
      <section className="pl-6 pr-3 w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Email
      </label>
        <input
          id="username"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('username') ? "border-red-500" : '')}
          name="username"
          type="text"
          placeholder="e.g. some.example"
          value={credentials.username}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
      </section>
      <section className="pl-3 pr-6 w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
      </label>
        <input
          id="password"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('password') ? "border-red-500" : '')}
          name="password"
          type="password"
          placeholder="* * * * * * * *"
          value={credentials.password}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
      </section>
      <section className="flex justify-end px-6 mt-3 w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:border-none">
          Sign in
      </button>
      </section>
    </form>
  );
}

export default LoginFormComponent;
