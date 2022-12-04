import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Trip Along <br className="sm:block hidden"/> The Milky Way</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience the beauty of your home galaxy on an epic journey to see the far reaches of the Milky Way. Visit far away planets and explore the void of the universe.</p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal