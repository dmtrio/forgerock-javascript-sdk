import FRCallback from '.';
import { Callback } from '../../auth/interfaces';

/**
 * Represents a callback used to instruct the system to poll while a backend process completes.
 */
class PollingWaitCallback extends FRCallback {
  /**
   * @param payload The raw payload returned by OpenAM
   */
  constructor(public payload: Callback) {
    super(payload);
  }

  /**
   * Gets the message to display while polling.
   */
  public getMessage(): string {
    return this.getOutputByName<string>('message', '');
  }

  /**
   * Gets the polling interval in seconds.
   */
  public getWaitTime(): number {
    return Number(this.getOutputByName<number>('waitTime', 0));
  }
}

export default PollingWaitCallback;
