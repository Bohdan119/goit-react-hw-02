const Notification = ({
  message,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Notification;
