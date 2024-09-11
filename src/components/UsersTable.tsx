import { useEffect } from "react";
import { useFetchUsers, useDebouncedFilter } from "../app/hooks";
import { User } from "../definitions/types";

import FilterInput from "./FilterInput";
import UserTableRow from "./UserTableRow";

import styles from "../styles/styles";

export default function UsersTable() {
  const { users, loading, error } = useFetchUsers();
  const { filter, handleInputChange, filteredUsers, setFilteredUsers } =
    useDebouncedFilter(users);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users, setFilteredUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        User Management Table - Mateusz Miszczak
      </h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableHeaderCell}>
                <FilterInput
                  label="Name"
                  placeholder="Filter by Name"
                  name="name"
                  value={filter.name}
                  onChange={handleInputChange}
                />
              </th>
              <th className={styles.tableHeaderCell}>
                <FilterInput
                  label="Username"
                  placeholder="Filter by Username"
                  name="username"
                  value={filter.username}
                  onChange={handleInputChange}
                />
              </th>
              <th className={styles.tableHeaderCell}>
                <FilterInput
                  label="Email"
                  placeholder="Filter by Email"
                  name="email"
                  value={filter.email}
                  onChange={handleInputChange}
                />
              </th>
              <th className={styles.tableHeaderCell}>
                <FilterInput
                  label="Phone"
                  placeholder="Filter by Phone"
                  name="phone"
                  value={filter.phone}
                  onChange={handleInputChange}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: User, index: number) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  index={index}
                  styles={styles}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.noUsersCell}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
