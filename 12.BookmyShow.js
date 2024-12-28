// 12. Design BookMyShow

// Question: Design a ticket booking service like BookMyShow that:

// Manages seating arrangements for multiple venues.
// Allows users to book, cancel, and view available seats.
// Handles concurrency for booking the same seat.

// Explanation:

// 1. Represent venues and seats as a grid or matrix.
// 2. Implement locking mechanisms to prevent double booking.
// 3. Include a reservation timeout for unconfirmed bookings.

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

// BookMyShow System
class BookMyShow {
  constructor(rows, cols) {
    this.seats = Array.from({ length: rows }, () => Array(cols).fill(0)); // 0: available, 1: booked
  }

  viewSeats() {
    return this.seats;
  }

  bookSeat(row, col) {
    if (this.seats[row][col] === 1) return false; // Already booked
    this.seats[row][col] = 1; // Book the seat
    return true;
  }

  cancelSeat(row, col) {
    if (this.seats[row][col] === 0) return false; // Not booked
    this.seats[row][col] = 0; // Cancel booking
    return true;
  }
}

// Test Case
let bms = new BookMyShow(5, 5);
console.log(bms.bookSeat(2, 3)); // Book seat (2,3): true
console.log(bms.viewSeats()); // Display seat arrangement
console.log(bms.cancelSeat(2, 3)); // Cancel booking: true
