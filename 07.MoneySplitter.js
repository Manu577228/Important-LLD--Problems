// 7. Design Money Splitter

// Question: Design a money splitter system where:

// Users can split bills evenly or unevenly.
// The system keeps track of individual contributions and debts between users.
// Includes functionality to settle balances.

// Explanation:

// The system should calculate the share of each participant in a transaction.
// Allow flexibility for uneven splits.
// Include operations for adding transactions and calculating debts.

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

// Money Splitter System
class MoneySplitter {
  constructor() {
    this.balances = new Map(); // Stores { user: balance }
  }

  addTransaction(payer, amount, participants, splits = []) {
    if (splits.length === 0) {
      let share = amount / participants.length;
      splits = Array(participants.length).fill(share);
    }

    participants.forEach((participant, i) => {
      if (!this.balances.has(participant)) this.balances.set(participant, 0);
      this.balances.set(
        participant,
        this.balances.get(participant) - splits[i]
      );
    });

    if (!this.balances.has(payer)) this.balances.set(payer, 0);
    this.balances.set(payer, this.balances.get(payer) + amount);
  }

  getBalances() {
    return [...this.balances.entries()].map(([user, balance]) => ({
      user,
      balance,
    }));
  }

  settleBalance(user1, user2, amount) {
    if (!this.balances.has(user1) || !this.balances.has(user2)) return false;
    this.balances.set(user1, this.balances.get(user1) - amount);
    this.balances.set(user2, this.balances.get(user2) + amount);
    return true;
  }
}

// Test Case
let splitter = new MoneySplitter();
splitter.addTransaction("Bharadwaj-1", 100, ["Bharadwaj-2", "Bharadwaj-3"]); // Split evenly
console.log(splitter.getBalances()); // Balances after transaction
splitter.settleBalance("Bharadwaj-2", "Bharadwaj-1", 20); // Settle partial debt
console.log(splitter.getBalances()); // Updated balances
