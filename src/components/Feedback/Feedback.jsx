const Feedback = ({ feedbackTypes, totalFeedback }) => {
  return (
    <div>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>
        Positive feedback:{" "}
        {Math.round((feedbackTypes.good / totalFeedback) * 100)}%
      </p>
    </div>
  );
};

export default Feedback;
