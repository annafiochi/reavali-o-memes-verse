import styles from './featuredMemesSection.module.css';
import FeaturedMemeCard from '../featuredMemeCard';

const FeaturedMemesSection = ({ memes }) => {

  return (
     <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
              {memes.map((meme) => (
                // COMPONENTE: FeaturedMemeCard
                <FeaturedMemeCard key={meme.id}  meme={meme} />
                // FIM COMPONENTE: FeaturedMemeCard
              ))}
            </div>
          </section>
  )
}

export default FeaturedMemesSection;