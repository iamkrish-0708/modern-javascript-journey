# 🌐 Stage 4: Asynchronous JavaScript & APIs — Master Notes

---

## 📌 Table of Contents
1. [Core Async Vocabulary & Concepts](#1-core-async-vocabulary--concepts)
2. [The Standard 4-Step `fetch()` Pattern (GET)](#2-the-standard-4-step-fetch-pattern-get)
3. [Sending Data to Servers (POST Requests & Headers)](#3-sending-data-to-servers-post-requests--headers)
4. [Parallel Requests with `Promise.all()`](#4-parallel-requests-with-promiseall)
5. [Error Handling & Defensive Coding Rules](#5-error-handling--defensive-coding-rules)

---

## 1. Core Async Vocabulary & Concepts

| Term | What It Literally Means in Plain English |
| :--- | :--- |
| **Synchronous** | Code runs top-to-bottom, line-by-line. Each line blocks the next until it finishes. |
| **Asynchronous (Async)** | Tasks that take time (like downloading from an API) run in the background without freezing the browser/app. |
| **`async`** | A keyword placed before a function to allow the use of `await` inside it. |
| **`await`** | Pauses execution of the async function until the promise completes (resolves). |
| **`fetch(url)`** | The built-in browser/Node function used to send HTTP network requests. |
| **`response.ok`** | A boolean (`true` for HTTP 200–299 success status, `false` for 404/500 errors). |
| **`response.json()`** | An async method that parses the incoming network stream into a usable JavaScript object. |
| **`Promise.all([...])`** | Runs multiple asynchronous tasks simultaneously (in parallel) and waits for all of them. |

---

## 2. The Standard 4-Step `fetch()` Pattern (GET)

Used to **retrieve** data from a server.

```javascript
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function loadPost() {
  try {
    // Step 1: Send request & wait for response headers
    const response = await fetch(API_URL);

    // Step 2: Guard check for HTTP errors (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Step 3: Stream and parse JSON body into a JS Object
    const post = await response.json();

    // Step 4: Destructure and consume data
    const { id, title, body } = post;
    console.log(`Post #${id}: ${title}`);

  } catch (error) {
    // Catches network disconnects, DNS failures, or manually thrown errors
    console.error("Failed to load post:", error.message);
  }
}

loadPost();
```

---

## 3. Sending Data to Servers (POST Requests & Headers)

Used to **create / save new data** on a backend database.

```javascript
const newUserData = {
  name: "Jason",
  username: "its_jason99",
  email: "jason@example.com"
};

async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // 1. HTTP Action
      headers: {
        "Content-Type": "application/json" // 2. Tells server the body is JSON
      },
      body: JSON.stringify(newUserData) // 3. Convert JS Object to JSON string
    });

    if (!response.ok) {
      throw new Error(`Server rejected with status: ${response.status}`);
    }

    const savedUser = await response.json();
    console.log("Created User ID:", savedUser.id);

  } catch (error) {
    console.error("Create user failed:", error.message);
  }
}

createUser();
```

---

## 4. Parallel Requests with `Promise.all()`

Instead of waiting sequentially (2s + 2s = 4s), `Promise.all` executes requests **concurrently** (takes only 2s total).

```javascript
async function loadDashboard() {
  try {
    // 1. Fire both requests simultaneously
    const [postRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    ]);

    // 2. Validate both HTTP statuses
    if (!postRes.ok || !commentsRes.ok) {
      throw new Error("One or more dashboard requests failed!");
    }

    // 3. Parse both JSON bodies in parallel
    const [post, comments] = await Promise.all([
      postRes.json(),
      commentsRes.json()
    ]);

    console.log(`Post Title: ${post.title}`);
    console.log(`Total Comments: ${comments.length}`);
    console.log(`First Commenter: ${comments[0].email}`);

  } catch (error) {
    console.error("Dashboard error:", error.message);
  }
}

loadDashboard();
```

---

## 5. Error Handling & Defensive Coding Rules

### ⚠️ Rule 1: `fetch()` Does NOT Reject on 404 or 500!
* `fetch()` only rejects if there is a **physical network failure** (offline, DNS lookup failed, CORS blocked).
* If the server responds with `404 Not Found` or `500 Server Error`, `fetch()` considers it a "successful communication".
* **Always check `if (!response.ok)` manually!**

### ⚠️ Rule 2: Constructor Capitalization
* Always use `new Error("...")` with a **capital `E`**. Writing `new error(...)` will throw a TypeError.

### ⚠️ Rule 3: Fail-Fast in `Promise.all`
* If any **single** promise inside `Promise.all([...])` fails, the entire batch rejects immediately and jumps to the `catch` block.
