import React, { useRef, useState } from 'react';

import styles from './ImageBoxContentForm.module.css';

const ImageBoxContentForm = (props) => {

  const [isRed, setIsRed] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [emailInputData, setEmailInputData] = useState('');
  const emailInputRef = useRef();

  // 특수문자 검사하기
  const valUnicode = (word) => {
    for (let w = 0; w < word.length; w++) {
      const char = word.charCodeAt(w);
      // 숫자, @ 영어 대문자, 영어소문자 에 해당하지 않는다면 return false
      if ( !( (char === 46) || (48 <= char && char <= 57) || (64 <= char && char <= 90) || (97 <= char && char <= 122) ) ) {
        return false;
      }
    }
    return true;
  };
  // email 유효성 검사
  const validateEmail = (value) => {
    // const { value } = emailInputRef.current
    // let value = emailInputData;

    // @ 있는지 없는지 확인
    if (!value.includes('@')) {
      return false;
    };
    // @ 2개 이상이면 false
    if (value.split('@').length > 2) {
      return false;
    }
    // 특수문자가 있다면 false가 반환된다.
    if (!valUnicode(value)) {
      return false;
    }
    // @ 을 기준으로 나눠서 뒷부분에 . 이 찍혀있는지 확인
    if (value.split('@')[1].includes('.')) {
      // . 뒤에 쓴 경우
      if (value.split('@')[1].split('.').length === 2) {
        return true;
      }
      return false;
    }
    // . 이 없는 경우
    return false;
  };

  const handleValidateEmail = (event) => {
    event.preventDefault();
    // email 입력 중
    if (emailInputData) {
      // email valid
      if (validateEmail(emailInputData)) {
        setIsRed(false);
        setIsValid(true);
      } else {
        setIsRed(true);
        setIsValid(false);
      }
      // 이메일 칸을 다 지웠을 때
    } else {
      setIsRed(false);
      setIsValid(false);
    };
  };

  return (
      <form
        className={styles.ImageBoxContentForm}
        onSubmit={handleValidateEmail}>
        <label htmlFor="emailValidate">Subscribe to our newsletter</label>
        <div className={`${styles.ImageBoxContentFormBox} ${isRed?styles.red:''}${isValid?styles.valid:''}`}>
          <input
            ref = {emailInputRef}
            onKeyUp={handleValidateEmail}
            onChange={(e) => setEmailInputData(emailInputRef.current.value)}
            placeholder="Enter your email" type="text" name="emailValidate"/>
          <button
            diabled = { isRed ? emailInputRef.current.value : undefined}>
            <img src={`${process.env.PUBLIC_URL}/images/paper-plane.png`} alt="email-submit" />
          </button>
        </div>
        {
          isRed && 
            <span className={styles.ImageBoxContentFormValid}>
              Please enter a valid email!</span>
        }
      </form>
  );
};

export default ImageBoxContentForm;