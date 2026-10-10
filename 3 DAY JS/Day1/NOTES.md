# ⚡ JS Launchpad — Day 1: Modern ES6+ Power Features

> **Core Focus:** Clean syntax, data extraction, and immutable state updates — the bedrock of React development.

---

## 1. 📦 Object Destructuring

Object destructuring unpacks properties from objects into distinct variables using concise syntax.

### Key Syntax Patterns:
```javascript
const user = {
  id: 9942,
  login: "iamkrish-0708",
  stats: { followers: 120, publicRepos: 35 },
  location: "Mumbai, India"
};

// 1. Basic Unpacking & Key Aliasing (login -> username)
// 2. Default Fallback Values (bio = "No bio provided")
// 3. Nested Destructuring with Defensive Guard ({ stats: { publicRepos = 0 } = {} })
const {
  login: username,
  stats: { publicRepos = 0 } = {},
  bio = "No bio provided",
  company
} = user;

console.log(`User: ${username} | Repos: ${publicRepos} | Bio: ${bio} | Company: ${company ?? "Independent"}`);
```

### Why Defensive Nested Destructuring Matters:
If `user.stats` is `undefined`, accessing `stats.publicRepos` will crash with `TypeError: Cannot read properties of undefined`. Providing `= {}` defaults ensures the app never crashes on incomplete API payloads.

---

## 2. 🗂️ Array Destructuring

Array destructuring unpacks items based on **position / index** rather than property names.

### Key Syntax Patterns:
```javascript
const metrics = [9.26, 20, 61, "AOA", "COA"];

// 1. Positional Unpacking
const [cgpa, utScore] = metrics;

// 2. Skipping Elements with Empty Commas
const [first, , third] = ["HTML", "CSS", "JavaScript"]; // first = "HTML", third = "JavaScript"

// 3. In-Place Variable Swapping (No temp variable needed!)
let a = 10, b = 20;
[a, b] = [b, a]; // a = 20, b = 10
```

---

## 3. 🛡️ Rest Operator (`...`) — "Gather"

The **Rest operator** collects multiple elements or remaining object properties into a single array/object.

### 1. Security & Data Sanitization (Extract & Exclude):
```javascript
const registration = {
  id: 101,
  username: "krish_dev",
  passwordHash: "secret_hash_999",
  email: "krish@example.com"
};

// Isolate sensitive fields and keep only safe public details
const { passwordHash, ...safeUserProfile } = registration;
// safeUserProfile = { id: 101, username: "krish_dev", email: "krish@example.com" }
```

### 2. Variadic Function Parameters (Varargs):
```javascript
function calculateTotal(...prices) {
  return prices.reduce((acc, curr) => acc + curr, 0);
}
console.log(calculateTotal(100, 250, 45, 90)); // 485
```

---

## 4. 🚀 Spread Operator (`...`) — "Unpack" & Immutability

The **Spread operator** expands an iterable (array or object) into individual elements. It is essential for **immutable React state updates**.

### 1. Immutable Array Operations:
```javascript
const initialNotifications = ["Email alerts", "SMS alerts"];

// Append without mutating the original array (No initialNotifications.push())
const updatedNotifications = [...initialNotifications, "Push notifications"];
```

### 2. Immutable Object Updates (Shallow Clone + Override):
```javascript
const currentAppState = {
  theme: "dark",
  user: { id: 1001, username: "krish_dev", email: "krish@example.com", role: "student" },
  notifications: ["Email alerts", "SMS alerts"],
  metrics: [9.26, 20, 34]
};

function applyUpdates(state, newEmail, newNotification, newLeetcodeCount) {
  const [cgpa, utScore] = state.metrics;
  const { id, ...otherUserDetails } = state.user;

  return {
    ...state, // Spread top-level properties
    theme: "system", // Override specific key
    user: {
      id,
      ...otherUserDetails,
      email: newEmail // Update nested email immutably
    },
    notifications: [...state.notifications, newNotification],
    metrics: [cgpa, utScore, newLeetcodeCount]
  };
}
```

---

## 💡 Quick Rules Cheatsheet

| Construct | Syntax | Purpose |
| :--- | :--- | :--- |
| **Object Destructure** | `const { a, b: alias = def } = obj;` | Extract named properties cleanly |
| **Array Destructure** | `const [first, , third] = arr;` | Extract elements by positional index |
| **Rest Operator** | `const { secret, ...safe } = data;` | Gather remaining items (Sanitization) |
| **Spread Operator** | `const next = { ...prev, key: val };` | Immutable cloning & state overrides |
