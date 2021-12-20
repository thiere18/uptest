import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,SelectField
} from 'react-admin';

export const UserCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <PasswordInput source="password" />
      <TextInput source="role" />
      <BooleanInput source="is_superuser" />
      <BooleanInput source="is_active" />

    </SimpleForm>
  </Create>
);
