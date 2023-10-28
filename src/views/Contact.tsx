import contactIllustration from "../assets/contact-illustration.png";

// components
import { Button, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import TimeComponent from "../components/TimeComponent";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative bg"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[384px] max-w-[384px]"
          />
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary">Get In<span className="text-secondary"> touch</span></h2>
          <h3 className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
          Let's collaborate! I'm available for freelance projects, full-time employment, contract work, and consulting.
          </h3>
          <h3 className="text-center xl:text-start text-base sm:text-lg text-secondary">
          Please email me or connect with me on LinkedIn to get in touch.
          </h3>
          
          <Button secondary><a href="mailto:usuriya530@gmail.com">
            CONTACT ME
          </a></Button>
          <TimeComponent />
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">© 2023 Udhayakumar Govindarajan</p>
        </motion.div>
      </div>
      

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;
