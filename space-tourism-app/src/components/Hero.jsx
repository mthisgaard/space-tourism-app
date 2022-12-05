import styles from '../style';
import { earth } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[44px] text-white ss:heading-[100px] leading-[75px]">
          <span className="text-gradient md:text-[116px]">BEYOND</span> {" "}
          <br/> Space At Your Fingertips
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of travel agents knows the universe like their own back pocket. Let us help you plan the adventure of a lifetime!</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:px-0 sm:px-16 px-6`}>
      <img src={earth} alt="earth" className="w-[100%] h-[100%] relative z-[5] rounded-lg bg-blend-lighten object-fit" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
)

export default Hero