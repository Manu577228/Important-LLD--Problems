// 1. Design a Parking Lot
// Question: Design a parking lot system that supports:

// 1. Single Entry and Exit Gates.
// 2. Multiple Entry and Exit Gates. The system should manage parking space allocation and vehicle tracking efficiently.

// Explanation:

// 1. For single gate, ensure vehicles are queued properly for entry/exit.
// 2. For multiple gates, manage distributed entry/exit with synchronization.
// 3. Track available slots and provide optimal parking space allocation.
// 4. Consider features like different parking types (compact, large, etc.), fees, and slot reservation.

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

// Parking Lot System
let ParkingLot = (() => {
  let instance; // Singleton instance

  class ParkingLot {
    constructor(totalSlots, gates) {
      this.totalSlots = totalSlots;
      this.availableSlots = totalSlots;
      this.gates = gates; // [{entry: true, exit: true}, ...]
      this.parkedVehicles = new Map(); // Map of slot -> vehicle
      this.nextSlot = 0; // Tracks the next available slot
    }

    parkVehicle(vehicleNumber) {
      if (this.availableSlots <= 0) return "No available slots";
      this.parkedVehicles.set(this.nextSlot, vehicleNumber);
      this.availableSlots--;
      return `Vehicle ${vehicleNumber} parked at slot ${this.nextSlot++}`;
    }

    removeVehicle(vehicleNumber) {
      for (let [slot, number] of this.parkedVehicles) {
        if (number === vehicleNumber) {
          this.parkedVehicles.delete(slot);
          this.availableSlots++;
          return `Vehicle ${vehicleNumber} removed from slot ${slot}`;
        }
      }
      return `Vehicle ${vehicleNumber} not found`;
    }

    getAvailableSlots() {
      return this.availableSlots;
    }
  }

  return {
    getInstance: (totalSlots, gates) => {
      if (!instance) {
        instance = new ParkingLot(totalSlots, gates);
      }
      return instance;
    },
  };
})();

// Test Case
let lot = ParkingLot.getInstance(100, [{ entry: true, exit: true }]);
console.log(lot.parkVehicle("KA-01-HH-1234")); // Output: Vehicle KA-01-HH-1234 parked at slot 0
console.log(lot.removeVehicle("KA-01-HH-1234")); // Output: Vehicle KA-01-HH-1234 removed from slot 0
console.log(lot.getAvailableSlots()); // Output: 100
