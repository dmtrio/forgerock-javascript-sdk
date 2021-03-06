import FRCallback from '.';
import { Callback } from '../../auth/interfaces';

/**
 * Represents a callback used to integrate reCAPTCHA.
 */
class ReCaptchaCallback extends FRCallback {
  /**
   * @param payload The raw payload returned by OpenAM
   */
  constructor(public payload: Callback) {
    super(payload);
  }

  /**
   * Gets the reCAPTCHA site key.
   */
  public getSiteKey(): string {
    return this.getOutputValue('recaptchaSiteKey');
  }

  /**
   * Sets the reCAPTCHA result.
   */
  public setResult(result: string) {
    this.setInputValue(result);
  }
}

export default ReCaptchaCallback;
