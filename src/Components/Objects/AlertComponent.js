import { Alert } from "react-bootstrap";

const AlertComponent = (variant, closeFunction, heading, body) => {
  return (
    <Alert className="mt-3" variant={variant} onClose={closeFunction} dismissible={true}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>
        {body}
      </p>
    </Alert>
  );
}

export default AlertComponent;