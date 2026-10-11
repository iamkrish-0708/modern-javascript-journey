# 📦 Day 3: ES Modules & Modular Architecture Notes

## 🎯 Overview
In modern web development and React, applications are never written in a single massive file. Code is broken into small, single-responsibility files using **ES Modules (ESM)** via `import` and `export`.

---

## 1. Why ES Modules?
- **Scope Isolation:** Each `.js` file has its own private scope. Variables and functions do not leak into the global `window` object.
- **Explicit Dependencies:** You only import what you explicitly need.
- **Maintainability & Reusability:** Logic is organized by responsibility (Data Layer, Formatter Layer, Presentation Layer).
- **Tree-Shaking:** Modern bundlers (like Vite and Webpack) automatically remove unused exported code from the final production bundle.

---

## 2. Named Exports vs. Named Imports

### When to use:
When a file provides **multiple utilities, helper functions, constants, or icons**.

### Syntax:
```javascript
// mathUtils.js (Provider)
export const calculateDiscount = (originalPrice, discountPercent) => {
  const discountAmt = originalPrice * (discountPercent / 100);
  return `$ ${discountAmt.toFixed(2)}`;
};

export const calculateTax = (price, taxRate = 0.18) => {
  const taxLiability = price * taxRate;
  return `$ ${taxLiability.toFixed(2)}`;
};
```

```javascript
// mathTest.js (Consumer)
import { calculateDiscount, calculateTax } from "./mathUtils.js";

console.log(calculateDiscount(1000, 20)); // "$ 200.00"
console.log(calculateTax(500));            // "$ 90.00"
```

### Key Rules:
- Must use curly braces `{ }` matching the exact exported identifier names.
- Can be aliased using `as`: `import { calculateTax as gstCalculator } from "./mathUtils.js";`.

---

## 3. Default Exports vs. Default Imports

### When to use:
When a file has **one primary responsibility** or represents a single major entity (e.g., a React Component or an API Service).

### Syntax:
```javascript
// userCard.js (Option 1: Standard function declaration - Preferred in React)
export default function renderUserCard(user) {
  const { name, role = "Student", avatar = DEFAULT_AVATAR } = user;
  console.log(`[User Card] Name: ${name} | Role: ${role} | Avatar: ${avatar}`);
}

// userCard.js (Option 2: Arrow function)
const renderUserCard = (user) => { ... };
export default renderUserCard;
```

```javascript
// testUserCard.js (Consumer)
import renderUserCard from "./userCard.js"; // 👈 No curly braces! Can be named anything.
```

### Key Rules:
- Only **ONE default export** per file is allowed.
- Imported **without curly braces `{ }`**.
- The importing file can name the default import whatever it wants.

---

## 4. Combining Default and Named Exports

A single file can have **one default export** alongside **multiple named exports**:

```javascript
// userCard.js
export const DEFAULT_AVATAR = "https://via.placeholder.com/150"; // Named export

export default function renderUserCard(user) { // Default export
  const { name, role = "Student", avatar = DEFAULT_AVATAR } = user;
  console.log(`[User Card] Name: ${name} | Role: ${role} | Avatar: ${avatar}`);
}
```

```javascript
// testUserCard.js
// Default import outside { }, named import inside { }
import renderUserCard, { DEFAULT_AVATAR } from "./userCard.js";
```

---

## 5. Browser Integration: `<script type="module">`

In HTML, scripts default to non-modular global mode. To enable ES modules:

```html
<!-- ✅ Activates native ES module support in the browser -->
<script type="module" src="./index.js"></script>
```

### Benefits:
1. Native `import` / `export` syntax works out-of-the-box.
2. Scripts are automatically **deferred** (load without blocking HTML parsing).
3. Executes in Strict Mode (`"use strict"`) automatically.
4. Prevents variable collision with the global scope.

---

## 6. Real-World Gotchas & Debugging Lessons

### Gotcha 1: `ReferenceError: func is not defined` with `export default`
```javascript
// ❌ WRONG: Cannot assign to undeclared variable on export default line
export default renderUserCard = (user) => { ... };

// ✅ FIX 1:
export default function renderUserCard(user) { ... }

// ✅ FIX 2:
const renderUserCard = (user) => { ... };
export default renderUserCard;
```

### Gotcha 2: The Missing `await` Trap (Passing Promises to Synchronous Functions)
```javascript
// ❌ WRONG:
let product = fetchProduct(1); // Returns a Pending Promise, NOT the data!
createProductCard(product);    // Tries to read product.price -> undefined -> undefined.toFixed(2) crashes!

// ✅ FIX:
let product = await fetchProduct(1); // Unwraps the real data object
createProductCard(product);
```

---

## 7. The 3-Tier Production Architecture (Day 3 Capstone Pattern)

| Layer | File | Responsibility | Concepts Used |
| :--- | :--- | :--- | :--- |
| **Data Service Layer** | `services.js` | Fetching from remote API, guarding with `response.ok`, parsing JSON | `fetch`, `async/await`, `throw new Error`, Default export |
| **Transformer / UI Layer** | `formatters.js` | Pure formatting, data extraction, card string template | Object destructuring, default params, Named exports |
| **Orchestrator Layer** | `index.js` | Lifecycle management: Loading $\rightarrow$ Fetch $\rightarrow$ Format $\rightarrow$ Catch $\rightarrow$ Finally | Multi-file imports, `try/catch/finally` |

---

## 8. Direct React Mapping (The Bridge)

| What you did in Day 3 JS | How it looks in React (Vite) |
| :--- | :--- |
| `import { createProductCard } from "./formatters.js"` | `import { useState, useEffect } from "react"` |
| `export default function renderUserCard(...)` | `export default function UserCard(props)` |
| `services.js` (Separate API fetcher) | `src/api/productService.js` (Separate API client) |
| `<script type="module" src="./index.js">` | `<script type="module" src="/src/main.jsx">` in Vite's `index.html` |
