import React, { useState, useRef } from 'react';

export default function OTPInput({ length = 6, onSubmit }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every(num => num !== "")) {
      onSubmit(newOtp.join(''));
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp-input-container">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="otp-input"
        />
      ))}
    </div>
  );
}
