import React, { useEffect, useState } from "react";
import styles from "./RegisterForm.module.css";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import axios from "axios";
import Loading from "@/components/atoms/Loading/Loading";

const loadingStates = {
  idle: "idle",
  loading: "loading",
  finished: "finished",
  error: "error",
};

export default function RegisterForm() {
  const [loadingState, setIsLoadingState] = useState(loadingStates.idle);

  const [registrationError, setRegistrationError] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const [repeatEmail, setRepeatEmail] = useState("");
  const [isRepeatEmailValid, setIsRepeatEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(true);
  const [name, setName] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(checkIfButtonDisabled());
    console.log(checkIfButtonDisabled());
  }, [isEmailValid, isPasswordValid, isPhoneValid, isRepeatEmailValid, isRepeatPasswordValid]);

  function checkIfButtonDisabled() {
    const disabled =
      isEmailValid &&
      isPhoneValid &&
      isRepeatEmailValid &&
      isPasswordValid &&
      isRepeatPasswordValid;
    return !disabled;
  }

  function handleSetEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value;

    setEmail(value);
    regex.test(value) ? setIsEmailValid(true) : setIsEmailValid(false);
  }

  function handleSetPhone(e) {
    const value = e.target.value;
    const phoneRegex = /^(\+370|8)(5|6)\d{7}$/;

    setPhone(value);
    phoneRegex.test(value) ? setIsPhoneValid(true) : setIsPhoneValid(false);
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
    setIsLoadingState(loadingStates.loading);
    try {
      await axios.post("/api/auth/register", { email, password, name, phone });
      setIsLoadingState(loadingStates.finished);
    } catch (error) {
      const errorCode = error.response.status;
      if (errorCode === 409) {
        setRegistrationError("Vartotojas su tokiu elektroniniu paštu jau egzistuoja");
      } else {
        setRegistrationError("Kažkas negerai pabandykite vėliau");
      }
      setIsLoadingState(loadingStates.error);
      setTimeout(() => {
        setIsLoadingState(loadingStates.idle);
      }, 2000);
    }
  }

  useEffect(() => {
    password === repeatPassword ? setIsRepeatPasswordValid(true) : setIsRepeatPasswordValid(false);
  }, [password, repeatPassword]);

  useEffect(() => {
    email === repeatEmail ? setIsRepeatEmailValid(true) : setIsRepeatEmailValid(false);
  }, [email, repeatEmail]);

  function showLoadingState() {
    if (loadingState === loadingStates.idle) {
      return <Button text={"Registruotis"} disabled={isButtonDisabled} />;
    } else if (loadingState === loadingStates.loading) {
      return <Loading />;
    } else if (loadingState === loadingStates.finished) {
      return <p>Sėkmingai užsiregistravote, galite prisijungti</p>;
    } else if (loadingState === loadingStates.error) {
      return <p>Įvyko klaida, bandykite dar kartą</p>;
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Registruotis</h1>
      {registrationError && (
        <div class={styles["warning-message"]}>
          <p>{registrationError}</p>
        </div>
      )}

      <Input text={"Vardas:"} id={"name"} value={name} setValue={handleSetName} />
      <Input
        text={"Telefono Numeris:"}
        id={"phone"}
        type={"tel"}
        value={phone}
        setValue={handleSetPhone}
        isValid={isPhoneValid}
        invalidText={"Įrašykite teisingą numerį"}
      />
      <Input
        text={"Emailas:"}
        id={"email"}
        type={"email"}
        value={email}
        setValue={handleSetEmail}
        isValid={isEmailValid}
        invalidText={"Emailas neteisingas"}
      />
      <Input
        text={"Pakartoti Emailą:"}
        id={"repeatEmail"}
        type={"email"}
        value={repeatEmail}
        setValue={handleSetRepeatEmail}
        isValid={isRepeatEmailValid}
        invalidText={"Emailai nesutampa"}
      />
      <Input
        text={"Slaptažodis:"}
        id={"password"}
        type={"password"}
        value={password}
        setValue={handleSetPassword}
        isValid={isPasswordValid}
        invalidText={"* Slaptaždis turi būti bent 8 simbolių ilgumo"}
      />
      <Input
        text={"Pakartoti slaptažodį:"}
        id={"repeatPassword"}
        type={"password"}
        value={repeatPassword}
        setValue={handleSetRepeatPassword}
        isValid={isRepeatPasswordValid}
        invalidText={"Slaptažodžiai nesutampa"}
      />
      {showLoadingState()}
    </form>
  );
}
