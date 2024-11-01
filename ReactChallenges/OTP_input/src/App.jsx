import React from 'react';
import './App.css';
import OTPInput from '../OTPInput';

function App() {
  const handleOtpSubmit = (otp) => {
    console.log(`Submitted OTP: ${otp}`);
  };

  return (
    <div className="App">
      <h2>Enter OTP</h2>
      <OTPInput length={6} onSubmit={handleOtpSubmit} />
    </div>
  );
}

export default App;
