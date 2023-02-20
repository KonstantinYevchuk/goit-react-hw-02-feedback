import PropTypes from 'prop-types';
import React from 'react';


export class Feedback extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    }
    static propTypes = {
        initialGood: PropTypes.number.isRequired,
        initialNeutral: PropTypes.number.isRequired,
        initialBad: PropTypes.number.isRequired,
    }
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
      }
    handleClickGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
            }))
    }
    handleClickNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
            }))
    }
    handleClickBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
            }))
    }
    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    }
        
    countPositiveFeedbackPercentage = () => this.state.good * 100 / this.countTotalFeedback();

    render() {
        const totalFeedback = this.countTotalFeedback();
        const totalPercent = this.countPositiveFeedbackPercentage();
        return (
            
            <div>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleClickGood}>Good</button>
            <button type="button" onClick={this.handleClickNeutral}>Neutral</button>
            <button type="button" onClick={this.handleClickBad}>Bad</button>
            <h2>Statistics</h2>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:{totalFeedback}</p>
            {totalPercent > 0 ? <p>Positive feedback:{totalPercent}%</p> : <p>Positive feedback: 0</p>}
            </div>
            
        )
    }
}


