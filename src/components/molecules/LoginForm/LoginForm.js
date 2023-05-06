import Input from '@/components/atoms/Input/Input';
import styles from './LoginForm.module.css';
import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Prisijungti</h1>
      <Input text={'Emailas:'} id={'email'} type={'email'} value={email} setValue={handleSetEmail} />
      <Input text={'Slaptažodis:'} id={'password'} type={'password'} value={password} setValue={handleSetPassword} />
      <Button text={'Prisijungti'} />
    </form>
  );
}
