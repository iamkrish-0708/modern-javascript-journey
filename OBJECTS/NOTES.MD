SINCE THERE 8 DATA TYPES WE LEARNED 7 WERE PRIMITIVE TYPES WHICH STORES A SINGLE TYPE OF VALUE AND THE REMAINING ONE WAS OBJECT DATA TYPE WHICH STORES MULTIPLE TYPE OF DATA IN KEY:VALUE PAIRS

MOSTLY WE USE DOT METHOD TO ACCESS KEY FROM OBJECT WHEN KEY IS KNOWN AND SIMPLE 
BUT FOR MORE COMPLEX PRACTICES WE PREFER [] METHOD TO ACCESS KEY
LIKE FOR EXAMPLE WE CAN'T ACCESS MULTI WORD KEY WITH DOT METHOD WE NEED TO USE [] METHOD

THERE ARE NO LIMITATIONS ON PROPERTY OR KEY NAME IN OBJECTS AS WE HAVE IN LIMITATION IN NORMAL VARIABLE NAME LIKE WE CAN'T USE LANGUAGE RESERVED WORDS LIKE for,return,if,etc.


THE in OPERATOR IS USED TO KNOW IF PROPERTY EXISTS IN OBJECT OR NOT BELOW IS EXAMPLE
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

The Problem: If you fetch a user from a database and their address is missing:
javascript

OPTIONAL CHAINING ?-
let user = {}; // user has no address property
alert(user.address.city); // ❌ CRASH! TypeError: Cannot read properties of undefined
The Solution (Optional Chaining ?.):
javascript


alert(user?.address?.city); // ✅ Output: undefined (No crash! Your server stays alive)
🌟 Rule: ?. stops reading and safely returns undefined if the property before it is null or undefined.

.map()
*IT TAKES AN EXISTING BOX(EX-ARRAY) AND MAKE CHANGES TO EACH ELEMENT IN PRE EXISTING BOX THEN RETURN THE NEW BOX HAVING SAME NUMBER OF ELEMENTS AS PREVIOUS BOX.*

.filter()
*CHECKS CONDITION FOR EACH ELEMENT IN BOX(EX-ARRAY) THEN KEEPS IT IN THE BOX ONLY IF CONDITION IS TRUE FOR ELEMENT ELSE ELEMENT IS REMOVED THEN FINAL BOX AFTER CHECKING ALL ELEMENTS RETURN AS OUTPUT.*

# 📌 JavaScript Modern Array Methods Cheatsheet

| Method | Purpose | Returns | Example |
| :--- | :--- | :--- | :--- |
| `.map()` | Transform every item | New Array (length = N) | `nums.map(n => n * 2)` |
| `.filter()` | Filter by condition | New Array (length ≤ N) | `users.filter(u => u.isActive)` |
| `.find()` | Get 1st matching item | Single Item / `undefined` | `users.find(u => u.id === 101)` |
| `.includes()` | Check primitive existence | `true` / `false` | `roles.includes("admin")` |
| `.reduce()` | Aggregate into single value | Any single value | `cart.reduce((sum, item) => sum + item.price, 0)` |
| `.forEach()` | Loop for side-effects | `undefined` | `nums.forEach(n => console.log(n))` |

---

### ⚡ Quick Syntax Templates

```javascript
// 1. MAP (Transform data / React list rendering)
const names = users.map(u => u.name);

// 2. FILTER (Search / remove items)
const activeUsers = users.filter(u => u.isActive);

// 3. FIND (Single record lookup by unique field)
const user = users.find(u => u.id === targetId);

// 4. INCLUDES (Role/Permission or tag check)
const hasPermission = ["admin", "editor"].includes(role);

// 5. REDUCE (Total / sum / aggregate)
const total = items.reduce((acc, item) => acc + item.price, 0);

// 6. FOREACH (Side-effects only: logs, DOM updates)
items.forEach(item => console.log(item.name));

common chaining pattern
const activeAdminsTotal = users
  .filter(u => u.isActive && u.role === "admin")
  .map(u => u.salary)
  .reduce((sum, sal) => sum + sal, 0);

⚠️ 4 Rules to Avoid Bugs
#.map() vs .forEach(): Use .map() when you need a new array; use .forEach() only for side-effects (it returns undefined).
#.filter() vs .find(): .filter() always returns an Array [...]; .find() returns the Item directly {...}.
#Always set initial value in .reduce(): e.g., , 0 or , [] or , {}.
#No mutations: None of these methods modify the original array.