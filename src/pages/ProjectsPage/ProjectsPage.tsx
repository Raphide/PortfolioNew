import ImageSlider from '../../components/ImageSlider/ImageSlider';
import styles from "./ProjectsPage.module.scss";

const ProjectsPage = () => {
  return (
    <div className={styles.content}>
      <ImageSlider/>
    </div>
  )
}

export default ProjectsPage