import styles from './Main.module.css';
import Card from '../UI/Card';
import TimelineContainer from '../UI/TimeLineContainer';
import Education from './Education';
import Experience from './Experience';
import TimelineBullet from '../UI/TimelineBullet';

const Main = (props) => {
  return (
    <div className={styles.main}>
      <Card className={styles['main__side-bar']}>
        <div className={styles['main__pic-box']}>
          <img
            src='https://media-exp1.licdn.com/dms/image/C5603AQECnRkun5RUgg/profile-displayphoto-shrink_800_800/0/1517819160982?e=1648684800&v=beta&t=YjsbRaSar2GlxH_wMd0-kLHd0fH4BNt94oWHD7Okwu4'
            alt='Profile'
            className={styles['main__pic']}
          />
        </div>
        <h2>About Me</h2>
        <p>
          I am a frontend web developer with solid knowledge of HTML, CSS3,
          JavaScript and react.js, and passionate in delivering all the job at
          right time with great quality according to the clients need or
          satisfaction. I strongly believe in frequent communication for
          fruitful results.
        </p>
        <h2>Language</h2>
        <p className={styles['left-align']}>
          <span>Amharic</span>: Native
        </p>
        <p className={styles['left-align']}>
          <span>English</span>: Conversational
        </p>
        <h2>Contact Me</h2>
        <a href='https://github.com/dawitesfa' target='_blank' rel='noreferrer'>
          <span>
            <i className='bi bi-github'></i>
          </span>
          Github
        </a>
        <a href='https://twitter.com/davortes' target='_blank' rel='noreferrer'>
          <span>
            <i className='bi bi-twitter'></i>
          </span>
          Tweeter
        </a>
        <a
          href='https://www.linkedin.com/in/dawit-tesfamariam-ab1450220/'
          target='_blank'
          rel='noreferrer'
        >
          <span>
            <i className='bi bi-linkedin'></i>
          </span>
          LinkdIn
        </a>
      </Card>
      <Card className={styles['main__education']}>
        <h3>Education / Courses</h3>
        <TimelineContainer>
          <Education
            title='Civil Engineering'
            yearFrom='2004'
            yearTo='2007'
            institute='Mekelle University, Ethiopia'
            certType='BSc. Degree in Civil Engineering'
          />
          <Education
            title='HTML Course'
            yearFrom='2018'
            yearTo='2018'
            institute='Sololearn'
          />
          <Education
            title='Responsive Web Design'
            yearFrom='2020'
            yearTo='2021'
            institute='freeCodeCamp'
          />
          <Education
            title='The Complete JavaScript Course: From Zero to Expert!'
            yearFrom='2021'
            yearTo='2022'
            institute='Udemy'
          />
        </TimelineContainer>
      </Card>
      <Card className={styles['main__experience']}>
        <h3>Experience</h3>
        <TimelineContainer>
          <Experience
            title='Civil Engineering works'
            yearFrom='2007'
            yearTo='2018'
            institute='Different Companies'
            desc='I have worked on three different construction companies around ethiopia. During my time on this job I have accomplished a good objective or goal, and I have learned how to manage my time and resources, how to communicate with colleagues and clients and more.'
          />

          <Experience
            title='Android Developer'
            yearFrom='2019'
            yearTo='present'
            institute='Own developer account'
            desc='I have developed 3/Three apps. During this time I  have acquired basic programing language knowledge esp. Java and the android/software development kit and how to use the documentation.'
          />
        </TimelineContainer>
      </Card>
      <Card className={styles['main__projects']}>
        <h3>Portfolio</h3>
        <TimelineContainer>
          <TimelineBullet>
            <a href='https://github.com/dawitesfa'>
              https://github.com/dawitesfa
            </a>
          </TimelineBullet>
          <TimelineBullet>
            <a href='https://play.google.com/store/apps/dev?id=4647771440783712051'>
              https://play.google.com/store/apps/dev?id=4647771440783712051
            </a>
          </TimelineBullet>
        </TimelineContainer>
      </Card>
    </div>
  );
};

export default Main;
