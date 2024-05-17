// App.jsx

import { useState } from "react";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import "./App.css";

function App() {
  const [feedbackTypes, updateFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const handleResetFeedback = () => {
    updateFeedback({
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
      <Notification message="No feedback yet" />
    </>
  );
}

export default App;
