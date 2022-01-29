import styles from './Education.module.css';
import TimelineBullet from '../UI/TimelineBullet';

const Education = (props) => {
  return (
    <div className={styles.edu}>
      <TimelineBullet className={styles['edu__title']}>
        {props.title}
      </TimelineBullet>
      <p className={styles['edu__name-inst']}>
        <span>Institute : </span>
        {props.institute}
      </p>
      <p className={styles['edu__year']}>
        <span>year : </span>
        {`from ${props.yearFrom} - ${props.yearTo}`}
      </p>
      {props.certType && (
        <p className={styles['edu__cert-type']}>
          <span>Title : </span>
          {props.certType}
        </p>
      )}
    </div>
  );
};

export default Education;
