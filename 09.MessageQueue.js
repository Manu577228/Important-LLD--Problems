// 9. Design Message Queue

// Question: Design a message queue system with the following features:

// Publish and consume messages.
// Support acknowledgment and retries.
// Ensure FIFO (First In, First Out) behavior.

// Explanation:

// 1. Producers add messages to the queue.
// 2. Consumers process messages and acknowledge them.
// 3. Messages are re-queued on failure.

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

// Message Queue
class MessageQueue {
  constructor() {
    this.queue = [];
    this.processing = new Set();
  }

  publish(message) {
    this.queue.push(message);
  }

  consume(handler) {
    if (this.queue.length === 0) return false;
    let message = this.queue.shift();
    this.processing.add(message);

    try {
      handler(message);
      this.processing.delete(message);
    } catch (error) {
      console.log("Retrying message:", message);
      this.queue.push(message);
    }
  }
}

// Test Case
let mq = new MessageQueue();
mq.publish("Message 1");
mq.publish("Message 2");
mq.consume((msg) => console.log("Processed:", msg)); // Process Message 1
mq.consume((msg) => console.log("Processed:", msg)); // Process Message 2
