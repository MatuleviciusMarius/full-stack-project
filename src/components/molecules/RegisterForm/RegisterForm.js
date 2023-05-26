import React, { useEffect, useState } from 'react';
import styles from './RegisterForm.module.css';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import axios from 'axios';
import Loading from '@/components/atoms/Loading/Loading';

export default function RegisterForm() {
  const [registrationError, setRegistrationError] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [repeatEmail, setRepeatEmail] = useState('');
  const [isRepeatEmailValid, setIsRepeatEmailValid] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(true);
  const [name, setName] = useState('');

  function handleSetEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value;

    setEmail(value);
    regex.test(value) ? setIsEmailValid(true) : setIsEmailValid(false);
  }

  function handleSetRepeatEmail(e) {
    const value = e.target.value;
    setRepeatEmail(value);
    value === email ? setIsRepeatEmailValid(true) : setIsRepeatEmailValid(false);
  }

  function handleSetPassword(e) {
    const value = e.target.value;
    setPassword(value);

    value.length < 8 ? setIsPasswordValid(false) : setIsPasswordValid(true);
  }

  function handleSetRepeatPassword(e) {
    const value = e.target.value;
    setRepeatPassword(value);
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { email, password, name });
    } catch (error) {
      const errorCode = error.response.status;
      if (errorCode === 409) {
        setRegistrationError('Vartotojas su tokiu elektroniniu paštu jau egzistuoja');
      } else {
        setRegistrationError('Kažkas negerai pabandykite vėliau');
      }
    }
  }

  useEffect(() => {
    password === repeatPassword ? setIsRepeatPasswordValid(true) : setIsRepeatPasswordValid(false);
  }, [password, repeatPassword]);

  useEffect(() => {
    email === repeatEmail ? setIsRepeatEmailValid(true) : setIsRepeatEmailValid(false);
  }, [email, repeatEmail]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Registruotis</h1>
      {registrationError && (
        <div class={styles['warning-message']}>
          <p>{registrationError}</p>
        </div>
      )}

      <Input text={'Vardas:'} id={'name'} value={name} setValue={handleSetName} />
      <Input
        text={'Emailas:'}
        id={'email'}
        type={'email'}
        value={email}
        setValue={handleSetEmail}
        isValid={isEmailValid}
        invalidText={'Emailas neteisingas'}
      />
      <Input
        text={'Pakartoti Emailą:'}
        id={'repeatEmail'}
        type={'email'}
        value={repeatEmail}
        setValue={handleSetRepeatEmail}
        isValid={isRepeatEmailValid}
        invalidText={'Emailai nesutampa'}
      />
      <Input
        text={'Slaptažodis:'}
        id={'password'}
        type={'password'}
        value={password}
        setValue={handleSetPassword}
        isValid={isPasswordValid}
        invalidText={'* Slaptaždis turi būti bent 8 simbolių ilgumo'}
      />
      <Input
        text={'Pakartoti slaptažodį:'}
        id={'repeatPassword'}
        type={'password'}
        value={repeatPassword}
        setValue={handleSetRepeatPassword}
        isValid={isRepeatPasswordValid}
        invalidText={'Slaptažodžiai nesutampa'}
      />
      <Button text={'Registruotis'} />
      <Loading />
    </form>
  );
}
