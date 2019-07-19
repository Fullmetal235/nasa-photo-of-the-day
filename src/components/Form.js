import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import styled from 'styled-components'

 const StyledLabel = styled.label`
       
`;

 const StyledInput = styled.input`
    width: 20%;
    height: 20px;
    margin: 2%;
`;

 const subForm = () => (
  <Form>
    <Form.Field>
      <StyledLabel>First Name</StyledLabel>
      <StyledInput placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <StyledInput placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

 export default subForm