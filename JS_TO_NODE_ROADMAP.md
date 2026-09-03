# 🚀 The Complete JavaScript-to-Node.js "Must-Do" Roadmap

> **Your Fast-Track Checklist:** Everything you need to transition from core JavaScript directly into Node.js, Express, and React. Open this file locally in your code editor for quick reference!

---

## 🟢 PART 1: ALREADY MASTERED (Completed ✅)

- [x] **1. Variables:** `let`, `const`, legacy `var`, naming rules (`$`, `_`, case-sensitivity).
- [x] **2. Data Types:** Numbers, Strings, Booleans, `null`, `undefined`, BigInt, `typeof` quirks.
- [x] **3. Interaction:** `alert()`, `prompt(title, [default])`, `confirm()`, modal behavior.
- [x] **4. Type Conversions:** `Number()`, `String()`, `Boolean()` (falsy values: `0`, `""`, `null`, `undefined`, `NaN`).
- [x] **5. Basic Operators & Maths:** Exponentiation `**`, Unary `+` shorthand, string concatenation with binary `+`.
- [x] **6. Comparisons:** Loose `==` vs Strict `===`, character-by-character string comparison.
- [x] **7. Conditional Branching:** `if`, `else if`, `else`, Ternary operator `? :` and chained ternaries.
- [x] **8. Logical Operators:** `&&` (1st falsy), `||` (1st truthy), `!` (NOT), `!!` (boolean cast), `??` (Nullish Coalescing).
- [x] **9. Loops & Switch:** `while`, `do...while`, `for`, `switch...case` statements.
- [x] **10. Functions:** Function Declarations, Function Expressions, **Arrow Functions** `() => {}`, Default Parameters, Scope & Shadowing.

---

## 🎯 PART 2: REMAINING CHECKLIST (To Complete Before Node.js)

### 📦 Stage 1: Objects & Modern Access
- [x] **1. Object Basics:** 
  * Creating objects: `const user = { name: "Krish", age: 18, role: "Student" };`
  * Dot notation (`user.name`) vs Bracket notation (`user["name"]`).
- [x] **2. Object References & Copying:**
  * Shallow copy using spread operator: `const userCopy = { ...user, age: 19 };`
- [x] **3. Optional Chaining `?.`:**
  * Safe property reading without crashing: `user?.address?.city`
- [x] **4. Object Iteration Methods:**
  * `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`, and `for...in` loop.

---

### 📊 Stage 2: Arrays & High-Order Array Methods *(HIGHEST PRIORITY)*
- [x] **5. Array Basics:** `const arr = [10, 20, 30];`, `.length`, `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `for...of`.
- [x] **6. Modern Array Methods (Used Daily in React & Node):**
  * `.map()` ➔ Transforms each element into a new array: `nums.map(n => n * 2)`
  * `.filter()` ➔ Filters elements based on a condition: `nums.filter(n => n > 10)`
  * `.reduce()` ➔ Aggregates array into a single value: `nums.reduce((acc, curr) => acc + curr, 0)`
  * `.find()` ➔ Returns the first matching element: `users.find(u => u.id === 1)`
  * `.forEach()` ➔ Loops through items: `nums.forEach(n => console.log(n))`
  * `.includes()` ➔ Checks if item exists: `fruits.includes("apple")`


---

### ⚡ Stage 3: Modern ES6+ Power Features
- [x] **7. Destructuring Assignment:**
  * Object destructuring: `const { name, email } = req.body;`
  * Array destructuring: `const [first, second] = items;`
- [x] **8. Rest Parameters & Spread Operator `...`:**
  * Rest parameters: `function sum(...numbers) {}`
  * Spread in arrays: `const combined = [...arr1, ...arr2];`
  * Spread in objects: `const updated = { ...original, active: true };`
- [x] **9. JSON Methods (Crucial for APIs & Node.js):**
  * `JSON.stringify(object)` ➔ Converts JS Object to JSON String.
  * `JSON.parse(jsonString)` ➔ Converts JSON String back to JS Object.


---

### 🌐 Stage 4: Asynchronous JavaScript (The Bridge to Backend & APIs)
- [ ] **10. Error Handling:**
  * `try { ... } catch (error) { console.error(error.message); }`
- [ ] **11. Promises:**
  * Understanding Promises: `.then(res => ...)`, `.catch(err => ...)`
  * `Promise.all([p1, p2])` ➔ Running multiple requests in parallel.
- [ ] **12. `async / await` (The Industry Standard for Node.js):**
  * Writing clean asynchronous code without callback hell:
  ```javascript
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  ```
- [ ] **13. `fetch()` API:**
  * Making HTTP `GET` and `POST` requests with headers and request bodies.

---

### 🎨 Stage 5: DOM & Events (Lightweight Front-End Bridge)
- [ ] **14. Selecting Elements:** `document.querySelector('#myBtn')`, `document.querySelectorAll('.item')`.
- [ ] **15. Event Listeners:** `btn.addEventListener('click', () => {})`, `input.addEventListener('input', () => {})`.
- [ ] **16. Form Handling:** `e.preventDefault()` inside form `submit` events to prevent page reload.

---

### 📦 Stage 6: JavaScript Modules
- [ ] **17. `import` and `export`:**
  * Named exports: `export const add = (a, b) => a + b;` ➔ `import { add } from './math.js';`
  * Default exports: `export default MyComponent;` ➔ `import MyComponent from './Component.js';`

---

## 🏁 What Happens Once Stage 6 is Checked Off?
👉 **YOU START LEVEL 2: NODE.JS + EXPRESS.JS BACKEND DEVELOPMENT & BUILD REST APIS!**
