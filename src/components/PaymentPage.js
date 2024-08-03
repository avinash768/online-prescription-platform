import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

const QRCodeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const QRCodeImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const PaymentDetails = styled.div`
  text-align: left;
`;

const ConsentSection = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const PaymentPage = () => {
  const [transactionId, setTransactionId] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment submitted successfully!');
};

  return (
    <PaymentContainer>
      <Header>Scan and Pay using UPI App</Header>
      <QRCodeSection>
        <QRCodeImage />
        <PaymentDetails>
          <p>Pay Using Any App</p>
          <h3>₹ 600</h3>
          <p>(After Payment)</p>
          <input
            type="text"
            placeholder="Enter Transaction ID*"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </PaymentDetails>
      </QRCodeSection>
      <ConsentSection>
        <p>
          I have understood that this is an online consultation without a physical checkup of my symptoms. The doctor
          hence relies on my description of the problem or scanned reports provided by me. With this understanding, I
          hereby give my consent for online consultation.
        </p>
        <label>
          <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} />
          Yes, I Accept
        </label>
      </ConsentSection>
      <Button onClick={handleSubmit}>Submit Appointment</Button>
    </PaymentContainer>
  );
};

export default PaymentPage;
