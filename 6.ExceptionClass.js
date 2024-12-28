// 6. Design Exception Class with Singleton Pattern

// Question: Design a custom exception class that:

// Ensures only one instance exists (Singleton).
// Allows for flexible exception messages and stack traces.

// Explanation:

// 1. Singleton pattern ensures all exceptions are consistent.
// 2. Include helper methods for specific error types.

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

// Exception Class with Singleton
class ExceptionHandler {
  static instance = null;

  constructor() {
    if (ExceptionHandler.instance) return ExceptionHandler.instance;
    ExceptionHandler.instance = this;
  }

  throwError(message) {
    return new Error(message);
  }

  throwValidationError(message) {
    return new Error(`Validation Error: ${message}`);
  }
}

// Test Case
let handler = new ExceptionHandler();
console.log(handler.throwError("Something went wrong")); // Standard Error
console.log(handler.throwValidationError("Invalid input")); // Validation Error
