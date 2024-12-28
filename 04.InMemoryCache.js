// 4. Design an In-Memory Cache

// Question: Design an in-memory caching system that:

// Stores key-value pairs in memory.
// Supports TTL (Time-To-Live) for entries.
// Efficiently handles data expiry and retrieval.

// Explanation:

// 1. Entries should expire automatically after their TTL.
// 2. Use a combination of a Map for storage and a priority queue (or timestamps) to manage expirations.
// 3. Include operations for adding, retrieving, and deleting data.

/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff )
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Github :  https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// In-Memory Cache
class InMemoryCache {
  constructor() {
    this.cache = new Map(); // Stores { key: { value, expiry } }
  }

  set(key, value, ttl) {
    let expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    let entry = this.cache.get(key);
    if (entry.expiry < Date.now()) {
      this.cache.delete(key); // Remove expired entry
      return null;
    }
    return entry.value;
  }

  delete(key) {
    this.cache.delete(key);
  }

  cleanup() {
    for (let [key, entry] of this.cache) {
      if (entry.expiry < Date.now()) this.cache.delete(key);
    }
  }
}

// Test Case
let cache = new InMemoryCache();
cache.set("a", 100, 5000); // Key 'a' with value 100, expires in 5 seconds
console.log(cache.get("a")); // 100
setTimeout(() => console.log(cache.get("a")), 6000); // null after 6 seconds
