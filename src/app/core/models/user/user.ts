export interface User {
  id?: string;
  email: string;
  password: string;
  mobileNumber?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  terms?: boolean;
}
