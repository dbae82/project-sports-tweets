import { Form, Input, Button } from "semantic-ui-react";

const RegisterForm = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="example@email.com" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
