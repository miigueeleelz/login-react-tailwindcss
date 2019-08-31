import React from 'react';

import Backstretch from '../assets/images/backstretch.jpg';

import LoginForm from '../components/forms/LoginFormComponent';

const LoginView = () => (
  <main className="flex h-screen">
    <section className="w-1/2">
      <img className="h-full object-cover w-full" src={Backstretch} alt="Backstretch" />
    </section>
    <section className="flex items-center w-1/2">
      <LoginForm />
    </section>
  </main>
);

export default LoginView;
