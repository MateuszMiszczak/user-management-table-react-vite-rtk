# User Management Table - React, TypeScript and RTK: Mateusz Miszczak https://user-management-table-mthwmiszczak.netlify.app/

## Usage and installation

- **npm i** - `installing packages`
- **npm run dev** - `running dev mode`

## Objectives & Requirements

### 1. Building a User Management Table

- **Task**: Display user information (name, username, email, and phone) fetched from a mock API.
- **Code**: ✔️ The `UsersTable.tsx` component along with smaller components display user information in a table format, with columns for name, username, email, and phone.

---

### 2. Implement Advanced Filtering

- **Task**: Implement filtering functionality for each column. The table should dynamically update as the user types.
- **Code**: ✔️ I’ve implemented the `useDebouncedFilter` hook, which provides real-time filtering with debouncing. Users can filter by name, username, email, and phone.

---

### 3. Manage State with Redux

- **Task**: Use Redux to manage the application state, including user data and filters.
- **Code**: ✔️ I've used **Redux Toolkit** (`userSlice.ts`) to manage the state, including fetching users with the `getUsers` async action and storing users in the Redux store.

---

### 4. Ensure Type Safety

- **Task**: Utilize TypeScript to enforce type safety across the web app.
- **Code**: ✔️ The application uses **TypeScript** with proper type definitions. I've defined interfaces such as `User`, `UserState`, `Filter` etc. The type definitions are being correctly used across the app to ensure type safety.

---

### 5. Fetch All Users

- **Task**: Use the [JSONPlaceholder `/users`](https://jsonplaceholder.typicode.com/users) API endpoint to fetch users.
- **Code**: ✔️ The `fetchUsers` function in `api.ts` fetches data from the API. This data is correctly mapped to the `User` type.

---

### 6. Display Users in a Table

- **Task**: Display users' name, username, email, and phone in a table.
- **Code**: ✔️ The users' data is correctly displayed in a table format within the `UsersTable` component.

---

### 7. Design and Styling

- **Task**: The design and styling should be user-friendly and visually appealing.
- **Code**: ✔️ The application is styled using **Tailwind CSS**. Additionally I've created a `styles.ts` file that encapsulates the CSS classes for various elements.

---

# Brief Explanation of My Approach

The project was built using **React** and **Redux Toolkit** for state management, with a strong focus on **TypeScript** for type safety. Below is an overview of key decisions and approaches used in the development process:

---

### 1. State Management with Redux Toolkit

- **Why Redux Toolkit?**  
  Redux Toolkit was chosen for its ability to simplify boilerplate and offer modern Redux features like `createAsyncThunk` for handling asynchronous actions.
- **State Handling**  
  The Redux store manages global state, holding fetched user data along with loading and error states. This ensures efficient state sharing across the application.

---

### 2. Fetching Data

- **Asynchronous API Calls**  
  Data was fetched from the JSONPlaceholder API using `createAsyncThunk` inside `userSlice.ts`. This approach streamlined the API call, managing user data, loading, and error states directly in the Redux store.

---

### 3. Advanced Filtering with Debouncing

- **Real-Time Search**  
  A search feature was implemented to filter users by name, username, email, and phone. The logic uses **debouncing** (via Lodash) to optimize performance, triggering the filter function only after a brief pause in typing. This reduces unnecessary state updates and enhances user experience.

---

### 4. TypeScript and Type Safety

- **Consistent Type Safety**  
  TypeScript was applied across the entire project to ensure data consistency. This helped prevent runtime errors and improved code maintainability.

---

### 5. Modular and Reusable Components

- **Component-Based Architecture**  
  The application follows a component-based architecture to promote modularity and reusability. Components such as `UsersTable`, `FilterInput`, and `UserTableRow` are isolated and reusable, making the app easier to extend and maintain in the future.

---

### 6. Styling and design

- **Styled with Tailwind**  
  The data table was styled with usage of `Tailwind CSS`, the classes have been extracted as a separate `styles.ts` file for better maintanance along with easier future improvements.

---

# Challenges Faced

### 1. Debouncing Filtering Logic

- **Challenge**: Without debouncing, the filtering function ran on every keystroke, leading to performance issues.
- **Solution**: I've implemented `Lodash's debounce` to trigger filtering only after the user stopped typing to optimize performance.

---

### 2. TypeScript and Redux Toolkit Simplification

- **Challenge**: Managing asynchronous actions while ensuring type safety can be complex in traditional Redux.
- **Solution**: I used `Redux Toolkit`’s built-in type inference, particularly in `createAsyncThunk`, which made handling payloads and error types seamless, simplifying the integration with `TypeScript`.

---

### 3. Handling API Response

- **Challenge**: The API provided unnecessary fields (e.g., company, address) that weren’t required for the project.
- **Solution**: I `mapped the API response`to extract only the required fields (name, username, email, phone), ensuring only relevant data was stored in Redux and displayed in the table.

### Task Summary

I've successfully completed the task, fulfilling all the specified requirements. The project includes a `user management table` with data fetched from a `mock API`, `advanced filtering functionality`, state management using `Redux Toolkit`, and comprehensive `TypeScript` integration to ensure type safety.

The application is styled using `Tailwind CSS`, with a clean and user-friendly interface. All features have been implemented according to the given objectives, ensuring **efficiency**, **scalability**, and **maintainability**.
