import React, { useState } from "react";
import { Navbar } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import { styles } from "../../styles";

const TokensPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = "EQBcDIBsG38XJsPxd4-kdCbhvNwb45ahsgl8OnsUK2kmH2Rt";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="relative z-0 bg-primary h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar type="tokens" />
      </div>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <motion.div variants={textVariant()} style={{ marginTop: "40px" }}>
          <h2
            className={styles.sectionHeadText}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "40px 0 20px 0",
            }}
          >
            ROACH COIN SNIPER - $RCS
          </h2>
          <p
            className={styles.sectionSubText}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            $RCS Token Contract:
          </p>
          <button
            className={styles.sectionSubText}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              backgroundColor: "white",
              color: "black",
              marginLeft: "8px",
              borderRadius: "4px",
              width: "100%",
            }}
            onClick={handleCopy}
          >
            <p>EQBcDIBsG38XJsPxd4-kdCbhvNwb45ahsgl8OnsUK2kmH2Rt</p>
          </button>
          {copied && (
            <p
              style={{ textAlign: "center", marginTop: "10px", color: "green" }}
            >
              The address was copied
            </p>
          )}
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "20px",
          }}
          className="mt-6 text-secondary text-[17px]  leading-[30px]"
        >
          The first RCS Tech technical token to be supported by our products and
          used in circulation.
        </motion.p>
        <motion.p style={{ width: "100%", height: "600px" }}>
          <iframe
            style={{ width: "100%", height: "100%" }}
            id="geckoterminal-embed"
            title="GeckoTerminal Embed"
            src="https://www.geckoterminal.com/ru/ton/pools/EQC0GB3TE2cFAfZkh8Wdd7D9-dZlX3cwfgWGOHmuwi5pexES?embed=1&info=1&swaps=1"
            frameborder="0"
            allow="clipboard-write"
            allowfullscreen
          ></iframe>
        </motion.p>
      </motion.section>
    </div>
  );
};

export default TokensPage;
