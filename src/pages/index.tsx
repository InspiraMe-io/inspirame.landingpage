
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/Index.module.scss'

import ContentBlock from '../components/ContentBlock'
import MiddleBlock from '../components/MiddleBlock';
import Contact from '../components/ContactForm';

import IntroContent from "../content/IntroContent.json";
import MiddleBlockContent from "../content/MiddleBlockContent.json";
import AboutContent from "../content/AboutContent.json";
import MissionContent from "../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../content/ContactContent.json";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ContentBlock 
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="main.svg"
          id="intro"
          isAnimation={true}
          animationFile={'network.json'}
        /> 

        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />

        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />

        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
          isAnimation={true}
          animationFile={'map.json'}
        />

        <Contact 
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </div>
      <Footer />
    </>
  )
}
