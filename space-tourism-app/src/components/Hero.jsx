import styles from '../style';
import { earth } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:heading-[100px] leading-[75px]">
          <span className="text-gradient text-[124px]">BEYOND</span> {" "}
          <br/> The Universe At Your Fingertips
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of travel agents knows the universe like their own back pocket. Let us help you plan the adventure of a lifetime!</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={earth} alt="earth" className="sm:w-[86%] w-[100%] h-[80%] relative z-[5] rounded-lg bg-blend-lighten" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
)

export default Hero