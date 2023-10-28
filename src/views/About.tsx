// assets

import aboutIllustration from "../assets/about-illustration.png";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import pinterestIcon from "../assets/pinterest-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative bg"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xs:text-start :xl:text-start text-base sm:text-lg text-textSecondary">
            Web Designer with 2+ years of experience in designing and developing high-quality websites. 
            Proficient in HTML, CSS, JavaScript, Tailwind CSS, React JS and Next JS, as well as graphic design software such 
            as Illustrator and Inkscape. Highly motivated and detail-oriented individual with a passion 
            for creating user-friendly and visually appealing websites. Always eager to take on new challenges.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <a href="https://www.facebook.com/itsmeudhay/"><SocialMediaIcon imgSrc={facebookIcon} title="Facebook" /></a>
            <a href="https://www.instagram.com/its_mee_udhay/"><SocialMediaIcon imgSrc={instagramIcon} title="Instagram" /></a>
            <a href="https://www.linkedin.com/in/udhayakumar-govindarajan-b60654102/"><SocialMediaIcon imgSrc={linkedinIcon} title="Twitter" /></a>
            <a href="https://in.pinterest.com/itsmeudhay/"><SocialMediaIcon imgSrc={pinterestIcon} title="Pinterest" /></a>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
