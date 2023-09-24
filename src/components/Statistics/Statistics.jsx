import { Notification } from 'components/Notification/Notification';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total || 0}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage || 0}%</p>
      </li>
    </ul>
  );
};
