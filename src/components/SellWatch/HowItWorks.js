import styles from "./howItWorks.module.scss";

function HowItWorks() {
  return (
    <div className={styles.howItWorks}>
      <h2>How it Works</h2>
      <div className={styles.howItWorks__container}>
        <div className={styles.howItWorks__box}>
          <i class="fas fa-comments-dollar"></i>
          <h3>Get an Offer</h3>
          <span>We will give you a price offer within 1-2 business days.</span>
        </div>
        <div className={styles.howItWorks__box}>
          <i class="fas fa-box-open"></i>
          <h3>Ship your Watch</h3>
          <span>You'll receive a pre-paid shipping label with insurance.</span>
        </div>
        <div className={styles.howItWorks__box}>
          <i class="fas fa-hand-holding-usd"></i>
          <h3>Get Paid</h3>
          <span>
            Once inspection is finalized, you wil quickly receive payment via
            check or wire payment.
          </span>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
