export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface UserTableRowProps {
  user: User;
  index: number;
  styles: { [key: string]: string };
}

export interface Filter {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface FilterInputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
