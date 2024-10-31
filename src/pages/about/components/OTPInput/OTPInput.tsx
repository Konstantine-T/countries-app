import { useRef } from 'react';

interface OTPProps {
  numberOfInputs: number;
}

const OTPInput: React.FC<OTPProps> = ({ numberOfInputs }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = event.target.value;
    if (value) {
      if (index < numberOfInputs - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    if (!/^\d*$/.test(input.value)) {
      input.value = '';
    }
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {Array.from({ length: numberOfInputs }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          onInput={handleInput}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el!)}
          style={{
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '18px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
