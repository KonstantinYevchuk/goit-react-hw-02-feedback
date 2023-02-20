import { List, Button } from "./FeedbackOptions.styled";

export function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <List>
        {options.map(option => (
          <li key={option}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
            </li>
        ))}
      </List>
    );
  }