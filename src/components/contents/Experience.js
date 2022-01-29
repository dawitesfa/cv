import styles from './Experience.module.css';
import TimelineBullet from '../UI/TimelineBullet';

const Experience = (props) => {
  return (
    <div className={styles.exp}>
      <TimelineBullet className={styles['exp__title']}>
        {props.title}
      </TimelineBullet>
      <p className={styles['exp__name-inst']}>
        <span>Company : </span>
        {props.institute}
      </p>
      <p className={styles['exp__year']}>
        <span>year : </span>
        {`from ${props.yearFrom} - ${props.yearTo}`}
      </p>
      {props.desc && (
        <p className={styles['exp__desc']}>
          <span>Description : </span>
          {props.desc}
        </p>
      )}
      {props.link && (
        <p className={styles['exp__desc']}>
          <span>Play store link: </span>
          <a href={props.link}>{props.link}</a>
        </p>
      )}
    </div>
  );
};

export default Experience;
