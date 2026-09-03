# ⚡ Stage 3: Modern ES6+ Power Features — Comprehensive Master Notes

---

## 📌 Table of Contents
1. [Destructuring Assignment (Objects & Arrays)](#1-destructuring-assignment)
2. [Rest Parameters vs. Spread Operator (`...`)](#2-rest-parameters-vs-spread-operator-)
3. [JSON Methods (`JSON.stringify` & `JSON.parse`)](#3-json-methods)
4. [Real-World Fullstack Integration Patterns](#4-real-world-fullstack-integration-patterns)
5. [Common Pitfalls & Golden Rules](#5-common-pitfalls--golden-rules)

---

## 1. Destructuring Assignment

Destructuring unpacks values from arrays or properties from objects into distinct variables using clean, declarative syntax.

### A. Object Destructuring (Unpack by Key Name)

```javascript
const user = {
  id: 101,
  username: "krish_dev",
  email: "krish@example.com",
  role: "admin",
  location: {
    city: "Bengaluru",
    country: "India"
  }
};

// 1. Basic Unpacking
const { username, email } = user;

// 2. Renaming Variables (key: alias)
const { role: userRole } = user; // userRole = "admin"

// 3. Default Values (applied if value is undefined)
const { theme = "dark" } = user; // theme = "dark"

// 4. Nested Destructuring
const { location: { city } } = user; // city = "Bengaluru"

// 5. Function Parameter Destructuring (React Props / Express req.body)
function sendWelcomeEmail({ email, username }) {
  console.log(`Sending email to ${username} at ${email}`);
}
sendWelcomeEmail(user);
```

### B. Array Destructuring (Unpack by Position / Index)

```javascript
const rgb = [255, 140, 0];

// 1. Basic Positional Unpacking
const [red, green, blue] = rgb;

// 2. Skipping Elements with Commas
const coordinates = [12.9716, 77.5946, 920]; // [lat, lng, altitude]
const [latitude, longitude] = coordinates; // Ignores 920

const scores = [100, 85, 40];
const [firstPlace, , thirdPlace] = scores; // Skips second place

// 3. Default Values
const settings = ["dark"];
const [themeMode, fontSize = "16px"] = settings; // fontSize fallback

// 4. React useState Pattern
// const [count, setCount] = useState(0);
```

---

## 2. Rest Parameters vs. Spread Operator (`...`)

Both use `...`, but perform opposite operations:
* **Rest (`...`)** ➔ **Gathers / Collects** multiple individual items into a single array or object.
* **Spread (`...`)** ➔ **Unpacks / Expands** an existing array or object into individual elements.

---

### A. Rest Parameters (`...`) — "Gather"

#### 1. In Function Arguments
Replaces the outdated `arguments` object by gathering all passed arguments into a real JavaScript array.

```javascript
function calculateTotal(taxRate, ...prices) {
  const subtotal = prices.reduce((sum, p) => sum + p, 0);
  return subtotal + (subtotal * taxRate);
}

calculateTotal(0.18, 100, 200, 300); // taxRate = 0.18, prices = [100, 200, 300]
```

#### 2. In Array Destructuring
Gathers the remaining elements into a sub-array.

```javascript
const runners = ["GoldWinner", "SilverWinner", "Runner3", "Runner4"];
const [first, second, ...remainingRunners] = runners;
// first = "GoldWinner"
// second = "SilverWinner"
// remainingRunners = ["Runner3", "Runner4"]
```

#### 3. In Object Destructuring (Sanitizing Sensitive Data)
Extracts specific keys and collects all remaining properties into a clean object.

```javascript
const dbUserRecord = {
  id: 42,
  name: "Krish",
  passwordHash: "$2b$10$w9x8y7...",
  secretApiKey: "sk_live_99281",
  role: "admin"
};

// Strip out sensitive credentials before sending to client
const { passwordHash, secretApiKey, ...safeUserProfile } = dbUserRecord;
// safeUserProfile = { id: 42, name: "Krish", role: "admin" }
```

---

### B. Spread Operator (`...`) — "Unpack"

#### 1. In Arrays (Immutable Additions & Merging)
Avoids mutating original arrays (crucial for React state).

```javascript
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "PostgreSQL"];

// Merge arrays
const fullstack = [...frontend, ...backend];

// Add items at beginning / end / middle immutably
const updatedFrontend = ["TypeScript", ...frontend, "TailwindCSS"];
```

#### 2. In Objects (Immutable Updates & Overrides)
Creates shallow copies with updated properties.

```javascript
const defaultPreferences = {
  theme: "light",
  language: "en",
  notifications: true
};

const userUpdates = {
  language: "hi"
};

// Merge and override
const finalPreferences = {
  ...defaultPreferences,
  ...userUpdates,
  theme: "dark" // Overrides "light"
};
```

> ⚠️ **Order Rule:** Property overrides must come **AFTER** the spread operator, or the spread will overwrite your changes.

---

## 3. JSON Methods

JSON (**J**ava**S**cript **O**bject **N**otation) is a text-only data interchange format.

### JS Object vs. JSON String

| Feature | JavaScript Object | JSON String |
| :--- | :--- | :--- |
| **Type** | In-memory Object (`typeof === "object"`) | Plain Text String (`typeof === "string"`) |
| **Keys** | `{ name: "Krish" }` (quotes optional) | `{"name": "Krish"}` (**must** have double quotes) |
| **Functions/Undefined** | Supported | **Not supported** (stripped during serialization) |
| **Primary Use** | Code execution & logic | Network APIs (Fetch/Axios), Disk/Storage (`localStorage`) |

---

### A. `JSON.stringify(data, replacer, spaceIndent)`
Converts a JavaScript Object into a serialized JSON String.

```javascript
const post = {
  id: 1,
  title: "Modern JavaScript",
  published: true
};

// 1. Compact serialization (for network transfer)
const jsonString = JSON.stringify(post);
// '{"id":1,"title":"Modern JavaScript","published":true}'

// 2. Pretty-print serialization (for logs / readable files)
const prettyJson = JSON.stringify(post, null, 2);
```

---

### B. `JSON.parse(jsonString)`
Converts a serialized JSON String back into a living JavaScript Object.

```javascript
const apiString = '{"status":200,"success":true,"user":{"name":"Sara"}}';

// Defensive Parsing Pattern (Production Best Practice)
try {
  const responseData = JSON.parse(apiString);
  console.log(responseData.user.name); // "Sara"
} catch (error) {
  console.error("Malformed JSON received from API:", error.message);
}
```

---

## 4. Real-World Fullstack Integration Patterns

### Pattern 1: Safe API Response Handler
```javascript
function handleIncomingPayload(rawString) {
  try {
    const payload = JSON.parse(rawString);
    
    // Destructure with fallbacks and nested data
    const {
      userId,
      profile: { name, email },
      roles = ["user"],
      ...metadata
    } = payload;

    return { userId, name, email, roles, metadata };
  } catch (err) {
    return { error: "Invalid Payload" };
  }
}
```

### Pattern 2: Immutable React State Update
```javascript
// Adding a new item to list without mutation
setTodoList(prevTodos => [
  { id: Date.now(), text: newTodoText, done: false },
  ...prevTodos
]);

// Updating nested user object without mutation
setUser(prevUser => ({
  ...prevUser,
  profile: {
    ...prevUser.profile,
    avatarUrl: "https://example.com/pic.png"
  }
}));
```

---

## 5. Common Pitfalls & Golden Rules

1. **JSON Keys Require Double Quotes:**  
   `{ name: "John" }` is valid JS, but **invalid** JSON. JSON requires `{"name": "John"}`.
2. **`JSON.parse()` is Dangerous Without `try...catch`:**  
   Passing `undefined`, malformed text, or HTML error pages will throw a fatal unhandled exception.
3. **Rest Operator Must Be Last:**  
   `const [first, ...rest, last] = arr;` ❌ **SyntaxError**. Rest must always be at the end.
4. **Shallow Copy Warning:**  
   `{ ...original }` and `[ ...original ]` only perform a **shallow copy**. Nested objects still share references unless deep-cloned.
5. **Spread Order Determines Precedence:**  
   `{ theme: "dark", ...defaults }` ❌ `defaults.theme` overwrites `"dark"`.  
   `{ ...defaults, theme: "dark" }` ✅ `"dark"` overrides `defaults.theme`.
