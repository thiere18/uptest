// in src/users.js
import React, { FC } from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
  DeleteButton
} from 'react-admin';

export const UserList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <BooleanField source="is_active" />
      <BooleanField source="is_superuser" />
      <TextField source="role" />
      <EditButton />
      <DeleteButton basePath="/users" />

    </Datagrid>
  </List>
);
