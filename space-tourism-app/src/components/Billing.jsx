import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Billing = () => (
  <section id="tours" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="tours" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Best Seller: <br className="sm:block hidden"/> To The Moon!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Have you always dreamt of taking those same steps as Neil Armstrong and bounce your way across the lunar surface? Well now you can!</p>
      <Button styles="mt-10"/>
    </div>
  </section>
)

export default Billing