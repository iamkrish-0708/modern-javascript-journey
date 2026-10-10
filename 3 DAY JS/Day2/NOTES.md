# 🌐 JS Launchpad — Day 2: Asynchronous JavaScript, Promises & APIs

> **Core Focus:** Conquering the Single-Threaded Event Loop, Promises, `async/await`, HTTP error boundaries, and production-grade API lifecycle patterns.

---

## 1. 🧵 Why Asynchronous JavaScript?

* **JavaScript is Single-Threaded:** It has only one Call Stack and executes one line of code at a time.
* **Synchronous (Blocking) Problem:** If a network API request takes 2 seconds, synchronous execution freezes the browser UI, blocking clicks, scrolls, and animations.
* **Asynchronous (Non-Blocking) Solution:** Network requests are offloaded to Web APIs (browser background threads). Once completed, callbacks are pushed to the Event Loop / Microtask Queue, keeping the page completely fluid and responsive.

---

## 2. 🤝 Promises & The 3 States

A **Promise** is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation.

### The 3 States of a Promise:
```
               ┌──► [Fulfilled / Resolved] ──► .then(data => ...)
[Pending] ─────┤
 (Ongoing)     └──► [Rejected] ──────────────► .catch(error => ...)
```

1. **`Pending`:** The initial state; asynchronous operation is currently running.
2. **`Fulfilled`:** The operation completed successfully, returning the resolved value.
3. **`Rejected`:** The operation failed (network error, timeout, server down), returning a reason/error.

---

## 3. ⛓️ The `.then()` & `.catch()` Pattern

```javascript
fetch('https://api.github.com/users/iamkrish-0708')
  // Step 1: Parse incoming HTTP stream into JSON
  .then(response => response.json())
  // Step 2: Unpack data via Destructuring
  .then(data => {
    const { login, public_repos, followers, location } = data;
    console.log(`User: ${login} | Repos: ${public_repos} | Followers: ${followers} | Location: ${location}`);
  })
  // Step 3: Catch network or parsing errors
  .catch(error => {
    console.error("Failed to fetch user:", error);
  });
```

### ⚠️ Limitation of Promise Chaining:
When multiple dependent network calls are chained, `.then()` callbacks can become deeply nested and messy to read (*Promise Chaining Clutter*).

---

## 4. ⚡ Modern `async` / `await` & `try...catch`

`async/await` is syntactic sugar over Promises that makes asynchronous code look and behave like clean, synchronous linear code.

### Core Rules:
1. **`async` keyword:** Placed before a function. It automatically makes the function return a Promise.
2. **`await` keyword:** Placed before a Promise inside an `async` function. It pauses execution on that line until the Promise resolves and returns the unwrapped data directly.
3. **`try...catch` block:** Replaces `.catch()` for unified error handling.

```javascript
async function fetchUserRepositories(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    console.log(`Found ${repos.length} repositories for ${username}`);

    // Combine Array & Object Destructuring
    const [firstRepo, secondRepo] = repos;
    const { name, stargazers_count, forks_count, html_url } = firstRepo;

    console.log(`Top Repo: ${name} | Stars: ${stargazers_count} | Forks: ${forks_count} | URL: ${html_url}`);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchUserRepositories("iamkrish-0708");
```

---

## 5. 🚨 The "Silent 404" Trap & `response.ok`

### The Common Pitfall:
```javascript
// ❌ WRONG ASSUMPTION:
// fetch() does NOT reject on HTTP 404 (Not Found) or 500 (Server Error)!
// It only rejects on total network failure (offline, DNS lookup failure).
```

If an API returns a `404 Not Found` response, `fetch()` still considers the Promise **fulfilled**. Without explicit guard checks, your code will try to destructure non-existent data and crash!

### The Production Fix (`response.ok` + `response.status`):
* `response.ok`: Boolean flag — `true` for HTTP `200-299`, `false` for `404`, `500`, `401`, etc.
* `response.status`: Integer HTTP status code (e.g., `200`, `404`, `500`).

```javascript
async function searchGithubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    // Explicit HTTP Guard Check
    if (!response.ok) {
      throw new Error(`User not found (HTTP Status: ${response.status})`);
    }

    const data = await response.json();
    const { login, name, bio, public_repos } = data;
    console.log(`Found: ${login} (${name ?? "No Name"}) | Repos: ${public_repos} | Bio: ${bio ?? "No Bio"}`);
  } catch (error) {
    console.error(`Error Caught: ${error.message}`);
  }
}
```

---

## 6. 🏆 The Production Tri-State Lifecycle Pattern

In modern frontend applications (React / Next.js), every API call follows a **3-State Lifecycle**:

```
1. ⏳ [Loading]  ──► Set loading spinner / status
2. ✅ [Success]  ──► Parse JSON, unpack & render data
3. ❌ [Error]    ──► Catch error & show user-friendly message
4. 🏁 [Finally]  ──► Reset loading state / cleanup lifecycle
```

### Complete Implementation (`finalTask.html`):
```javascript
async function fetchProductDetails(productId) {
  try {
    // State 1: Loading
    console.log(`⏳ [Loading] Fetching product details for ID: ${productId}...`);
    
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    
    // HTTP Error Guard
    if (!response.ok) {
      throw new Error(`Product not found with ID ${productId} (HTTP Status: ${response.status})`);
    }

    // State 2: Success
    const product = await response.json();
    const {
      title: productName,  // Alias
      price,
      rating,
      category,
      discountPercentage = 0, // Default fallback
      brand = "Generic"       // Default fallback
    } = product;

    console.log(`✅ [Success] Product: ${productName} | Brand: ${brand} | Category: ${category} | Price: $${price} | Rating: ${rating}⭐`);

  } catch (error) {
    // State 3: Error
    console.error(`❌ [Error] ${error.message}`);
  } finally {
    // Lifecycle Completion
    console.log(`🏁 [Complete] Finished request lifecycle for ID: ${productId}.\n`);
  }
}

// Valid Call (ID 1)
fetchProductDetails(1);

// Invalid Call (ID 99999 -> Triggers 404 error)
fetchProductDetails(99999);
```

---

## 💡 Key Takeaways & React Readiness

1. Always use `async/await` + `try...catch` for readable asynchronous workflows.
2. Never trust raw `fetch()` without checking `if (!response.ok) throw new Error(...)`.
3. Combine Object Aliasing (`title: productName`) and Default Values (`brand = "Generic"`) to defend against messy API responses.
4. Use `finally` for teardown actions (like turning off loading spinners in React `setIsLoading(false)`).
