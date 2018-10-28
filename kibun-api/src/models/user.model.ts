import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'users'
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
  })
  id: number;

  @property({
    type: 'string',
    required: true
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
