import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import "./App.css";

function App() {

  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = localStorage.getItem("feedbackTypes");
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("feedbackTypes", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedbackPercentage =
    totalFeedback > 0
      ? Math.round((feedbackTypes.good / totalFeedback) * 100)
      : 0;

  const updateFeedback = (newFeedback) => {
    setFeedbackTypes(newFeedback);
  };

  const handleResetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback feedbackTypes={feedbackTypes} />
      <Notification
        message="No feedback yet"
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
      />
    </>
  );
}

export default App;
