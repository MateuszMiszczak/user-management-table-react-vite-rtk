import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/users/userSlice";
import { RootState, AppDispatch } from "./store";
import { User, Filter } from "../definitions/types";
import debounce from "lodash/debounce";

const normalizeString = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

export const useFetchUsers = (): {
  users: User[];
  loading: boolean;
  error: string | null;
} => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return { users, loading, error };
};

export const useDebouncedFilter = (
  users: User[]
): {
  filter: Filter;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredUsers: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
} => {
  const [filter, setFilter] = useState<Filter>({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const debouncedFilterChange = useMemo(
    () =>
      debounce((filter: Filter, users: User[]) => {
        const normalizedFilter = {
          name: normalizeString(filter.name),
          username: normalizeString(filter.username),
          email: normalizeString(filter.email),
          phone: normalizeString(filter.phone),
        };

        const filtered = users.filter((user: User) => {
          return (
            normalizeString(user.name).includes(normalizedFilter.name) &&
            normalizeString(user.username).includes(
              normalizedFilter.username
            ) &&
            normalizeString(user.email).includes(normalizedFilter.email) &&
            normalizeString(user.phone).includes(normalizedFilter.phone)
          );
        });

        setFilteredUsers(filtered);
      }, 300),
    []
  );

  const handleFilterChange = useCallback(
    (filter: Filter) => {
      debouncedFilterChange(filter, users);
    },
    [users, debouncedFilterChange]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    handleFilterChange(newFilter);
  };

  return { filter, handleInputChange, filteredUsers, setFilteredUsers };
};
