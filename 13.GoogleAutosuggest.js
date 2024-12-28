// 13. Design Google Autosuggest

// Question: Design an autosuggest system that:

// Predicts search suggestions based on user input.
// Retrieves suggestions from a preloaded dictionary.
// Supports efficient prefix searching.

// Explanation:

// 1. Use a Trie (prefix tree) to store and search words efficiently.
// 2. Add functionalities for inserting and querying prefixes.

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

// Google Autosuggest System
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class AutoSuggest {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return this.collectWords(node, prefix);
  }

  collectWords(node, prefix) {
    let results = [];
    if (node.isEndOfWord) results.push(prefix);
    for (let char in node.children) {
      results.push(...this.collectWords(node.children[char], prefix + char));
    }
    return results;
  }
}

// Test Case
let auto = new AutoSuggest();
auto.insert("google");
auto.insert("go");
auto.insert("good");
console.log(auto.search("go")); // Suggestions: ['go', 'google', 'good']
