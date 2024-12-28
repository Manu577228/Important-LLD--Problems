// 11. Design Tiny URL

// Question: Design a URL shortening service that:

// Generates a unique, short URL for every long URL.
// Maps the short URL back to the original URL.
// Includes functionality for expiration or statistics tracking (optional).

// Explanation:

// 1. Short URLs should be unique and compact, typically alphanumeric.
// 2. Use a hash function or database ID to generate short URLs.
// 3. Ensure scalability for high usage.

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

// Tiny URL System
class TinyURL {
  constructor() {
    this.urlMap = new Map(); // Short -> Long
    this.reverseMap = new Map(); // Long -> Short
    this.baseUrl = "http://tiny.url/";
    this.counter = 0;
  }

  encode(longUrl) {
    if (this.reverseMap.has(longUrl)) {
      return this.reverseMap.get(longUrl);
    }
    let shortUrl = this.baseUrl + this.counter.toString(36);
    this.urlMap.set(shortUrl, longUrl);
    this.reverseMap.set(longUrl, shortUrl);
    this.counter++;
    return shortUrl;
  }

  decode(shortUrl) {
    return this.urlMap.get(shortUrl) || null;
  }
}

// Test Case
let tiny = new TinyURL();
let shortUrl = tiny.encode("https://example.com/very/long/url");
console.log(shortUrl); // Example: http://tiny.url/0
console.log(tiny.decode(shortUrl)); // Original URL
