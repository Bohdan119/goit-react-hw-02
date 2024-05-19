const Options = ({ updateFeedback, handleResetFeedback, totalFeedback }) => {
  const handleClick = (type) => {
    updateFeedback((prevFeedback) => {
      const newFeedback = {
        ...prevFeedback,
        [type]: prevFeedback[type] + 1,
      };
      return newFeedback;
    });
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={handleResetFeedback}>RESET</button>
      )}
    </div>
  );
};

export default Options;
