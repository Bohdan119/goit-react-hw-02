const Feedback = ({feedbackTypes}) => {
    return (
    <div>
            <p>Good:{ feedbackTypes.good}</p>
            <p>Neutral:{ feedbackTypes.neutral}</p>
            <p>Bad:{ feedbackTypes.bad}</p>
    </div>
    );
}

export default Feedback;