import styles from './Address.module.css';

import React, { useState } from 'react';

const Address = (props) => {
  const [hovered, setHovered] = useState(false);
  const onHoverHandler = (e) => {
    e.preventDefault();
    setHovered(true);
  };
  const onBlurHandler = (e) => {
    e.preventDefault();
    setHovered(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles['header__person-detail']}>
          <h1 className={styles['header__name']}>Dawit Tesfamariam</h1>
          <p className={styles['header_pro-title']}>Front-End Web Developer</p>
        </div>
        <div
          className={styles['header__pic-box']}
          onMouseOver={onHoverHandler}
          onMouseOut={onBlurHandler}
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQECnRkun5RUgg/profile-displayphoto-shrink_800_800/0/1517819160982?e=1648684800&v=beta&t=YjsbRaSar2GlxH_wMd0-kLHd0fH4BNt94oWHD7Okwu4"
            alt="Profile"
            className={styles['header__pic']}
          />
        </div>
        <div className={styles['header__address']}>
          <p>
            <span>Address :</span> Addis Ababa, Ethiopia
          </p>
          <p>
            <i class="bi bi-telephone"></i>
            +251911300712
          </p>
        </div>
      </header>
      <hr className={styles.hr} style={{ width: hovered ? '25%' : '100%' }} />
    </>
  );
};

export default Address;
