// 3. Design LRU (Static + Dynamic Input Flow)

// Question: Design a Least Recently Used (LRU) Cache with:

// Static inputs (fixed capacity).
// Dynamic inputs (capacity can change at runtime).

// Explanation:

// 1. LRU evicts the least recently used items when the cache reaches its capacity.
// 2. Use a combination of a Map and Doubly Linked List for efficient operations.
// 3. For LFU, track usage frequency and evict the least frequently used items.

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

// LRU Cache
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Key-Value store
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move to end
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity)
      this.cache.delete(this.cache.keys().next().value); // Evict LRU
    this.cache.set(key, value);
  }
}

// Test Case
let lru = new LRUCache(2);
lru.put(1, 1); // Add (1, 1)
lru.put(2, 2); // Add (2, 2)
console.log(lru.get(1)); // 1
lru.put(3, 3); // Evict (2, 2)
console.log(lru.get(2)); // -1 (not found)
