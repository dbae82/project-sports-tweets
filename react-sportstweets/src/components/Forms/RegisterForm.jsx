import { Form, Input, Button } from "semantic-ui-react";

const RegisterForm = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input placeholder="Username" icon="user" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="example@email.com" icon="mail" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input placeholder="Password" icon="lock" />
        </Form.Field>
        <Button floated="right" type="submit" positive>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
