import { UserTableRowProps } from "../definitions/types";

export default function UserTableRow({
  user,
  index,
  styles,
}: UserTableRowProps) {
  return (
    <tr className={index % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven}>
      <td className={styles.tableCell}>{user.name}</td>
      <td className={styles.tableCell}>{user.username}</td>
      <td className={styles.tableCell}>{user.email}</td>
      <td className={styles.tableCell}>{user.phone}</td>
    </tr>
  );
}
