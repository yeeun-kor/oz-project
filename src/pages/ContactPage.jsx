import React from "react";
import styles from "../assets/styles/contactPage.module.css";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("전송 되었습니다!");
    e.target.reset();
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">메세지</label>
          <input id="message" name="message" required />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default ContactPage;
