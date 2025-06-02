import styles from './creatorSection.module.css';
import CreatorCard from '../creatorCard';


const CreatorSection = ({ topCreators }) => {
    return (
        <section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
              {topCreators.map((creator) => (
                // COMPONENTE: CreatorCard
              <CreatorCard key={creator.id} creator={creator} />
                // FIM COMPONENTE: CreatorCard
              ))}
            </div>
          </section>

    )
}
export default CreatorSection;