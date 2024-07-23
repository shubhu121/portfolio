import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.jpg';
import freshBurger from '../../assets/fresh-burger.jpg';
import hipsster from '../../assets/hipsster.jpg';
import fitLift from '../../assets/fitfit.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://flame-n-foe.vercel.app/"
          h3="Flame n Foe"
          p="Web Game App (Based on Phaser)"
        />
        <ProjectCard
          src={freshBurger}
          link="https://ride-me.vercel.app"
          h3="Ride Me"
          p="Cab Booking App"
        />
        <ProjectCard
          src={hipsster}
          link="https://curious-stem.vercel.app/"
          h3="Curious STEAM"
          p="Web App to educate about STEM"
        />
        <ProjectCard
          src={fitLift}
          link="https://think-space-xi.vercel.app/"
          h3="Think Space"
          p="Productivity App"
        />
      </div>
    </section>
  );
}

export default Projects;
