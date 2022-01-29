import styles from './TimelineBullet.module.css';

const TimelineBullet = (props) => {
  return (
    <h5 className={`${styles.bullet} ${props.className}`}>{props.children}</h5>
  );
};

export default TimelineBullet;
