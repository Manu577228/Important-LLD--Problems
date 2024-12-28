// 8. Design Notification Service

// Question: Design a notification service that:

// Sends notifications via multiple channels (email, SMS, push).
// Allows users to configure their preferred channels.
// Handles batching and retries for failed notifications.

// Explanation:

// 1. Notifications should have a fallback mechanism.
// 2. Prioritize user preferences for channels.
// 3. Include retry logic for failed notifications.

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

// Notification Service
class NotificationService {
  constructor() {
    this.preferences = new Map(); // { user: [preferredChannels] }
  }

  setPreferences(user, channels) {
    this.preferences.set(user, channels);
  }

  sendNotification(user, message) {
    let channels = this.preferences.get(user) || ["email"];
    for (let channel of channels) {
      if (this.sendToChannel(channel, message)) return true; // Stop after successful send
    }
    return false; // If all channels fail
  }

  sendToChannel(channel, message) {
    try {
      console.log(`Sending via ${channel}: ${message}`);
      return true; // Simulating success
    } catch (err) {
      console.log(`Failed to send via ${channel}`);
      return false;
    }
  }
}

// Test Case
let notifier = new NotificationService();
notifier.setPreferences("Alice", ["push", "email"]);
notifier.sendNotification("Alice", "Your order is shipped!"); // Try preferred channels
