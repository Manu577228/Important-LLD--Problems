// 14. Design Stock Exchange

// Question: Design a stock exchange system that:

// Allows users to buy and sell stocks in real-time.
// Manages stock prices dynamically based on supply and demand.
// Tracks user portfolios and their transaction history.

// Explanation:

// 1. The system should include a structure to store stock details (e.g., name, price, available quantity).
// 2. Transactions should update stock quantities and user portfolios.
// 3. Real-time price adjustment based on supply-demand can be implemented with simple rules for now.

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

// Stock Exchange System
class StockExchange {
  constructor() {
    this.stocks = {}; // {symbol: {price, quantity}}
    this.portfolios = {}; // {userId: {symbol: quantity}}
  }

  addStock(symbol, price, quantity) {
    this.stocks[symbol] = { price, quantity };
  }

  buyStock(userId, symbol, quantity) {
    if (!this.stocks[symbol] || this.stocks[symbol].quantity < quantity)
      return false;
    if (!this.portfolios[userId]) this.portfolios[userId] = {};

    this.stocks[symbol].quantity -= quantity;
    this.portfolios[userId][symbol] =
      (this.portfolios[userId][symbol] || 0) + quantity;
    this.adjustPrice(symbol, 1); // Simulate price increase on demand
    return true;
  }

  sellStock(userId, symbol, quantity) {
    if (
      !this.portfolios[userId] ||
      (this.portfolios[userId][symbol] || 0) < quantity
    )
      return false;

    this.portfolios[userId][symbol] -= quantity;
    this.stocks[symbol].quantity += quantity;
    this.adjustPrice(symbol, -1); // Simulate price decrease on supply
    return true;
  }

  adjustPrice(symbol, delta) {
    this.stocks[symbol].price = Math.max(1, this.stocks[symbol].price + delta);
  }

  viewPortfolio(userId) {
    return this.portfolios[userId] || {};
  }
}

// Test Case
let exchange = new StockExchange();
exchange.addStock("AAPL", 150, 1000);
exchange.buyStock("user1", "AAPL", 10);
console.log(exchange.viewPortfolio("user1")); // { AAPL: 10 }
exchange.sellStock("user1", "AAPL", 5);
console.log(exchange.stocks); // Stock data with updated quantities and prices
