import styles from './TimeLineContainer.module.css';

const TimeLineContainer = (props) => {
  return (
    <div className={`${styles['timeline-wrapper']} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default TimeLineContainer;
