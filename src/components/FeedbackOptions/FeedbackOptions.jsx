import { Wrap } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrap>
      {options.map((option, idx) => (
        <button key={idx} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </Wrap>
  );
};
