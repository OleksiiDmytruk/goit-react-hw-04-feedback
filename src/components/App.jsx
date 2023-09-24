import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;
  const steteOptions = Object.keys(feedback);

  const handleLeaveFeedback = evt => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [evt.target.textContent]: prevFeedback[evt.target.textContent] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={steteOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
