import React, { useState, useRef, useEffect } from 'react';

export default function OTPInput({ length = 6, onSubmit }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  // Function to generate a random OTP
  const generateOtp = () => {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    setGeneratedOtp(otp);
    console.log("Generated OTP:", otp); // for testing purposes
  };

  useEffect(() => {
    generateOtp();
  }, []);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if all fields are filled
    if (newOtp.every(num => num !== "")) {
      const enteredOtp = newOtp.join("");
      if (enteredOtp === generatedOtp) {
        setMessage("Success! OTP is correct.");
      } else {
        setMessage("Error: Invalid OTP.");
      }
      onSubmit(enteredOtp);
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <span className="otp-input-container">
      <p>Generated OTP: {generatedOtp}</p>
      <div className="otp-fields">
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
      {message && <p className="otp-message">{message}</p>}
    </span>
  );
}
