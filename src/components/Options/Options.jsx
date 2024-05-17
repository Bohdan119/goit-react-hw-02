const Options = ({ updateFeedback, totalFeedback }) => {
  const handleClick = (type) => {
    updateFeedback((prevTypes) => ({
      ...prevTypes,
      [type]: prevTypes[type] + 1,
    }));
  };

  const hendleResetFeedback = () => {
    updateFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={hendleResetFeedback}>RESET</button>
      )}
    </div>
  );
};

export default Options;
