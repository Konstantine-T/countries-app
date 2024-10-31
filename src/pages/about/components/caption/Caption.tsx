import OTPInput from '../OTPInput/OTPInput';

const Caption = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <OTPInput numberOfInputs={9} />
    </div>
  );
};

export default Caption;
