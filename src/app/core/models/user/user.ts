export interface User {
  id?: string;
  email: string;
  password: string;
  mobileNumber?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  role?: string;
  address?: string;
  country?: string;
  terms?: boolean;
}
