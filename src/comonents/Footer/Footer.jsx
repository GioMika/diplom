
import styles from "./footer.module.css"
import instagram from '../../assest/img/inst.svg'
import whatsapp from '../../assest/img/whatsapp.svg'
import map from "../../assest/img/map.svg"

function Footer() {
  return (
    <footer>
      <h2 className={styles.text_contact}>Contact</h2>

      <div className={styles.social_elements}>
        <div className={styles.number_phone}>
          <p className={styles.p_phone}>Phone</p>
          <p className={styles.p_number}>+49 999 999 99 99</p>
        </div>

        <div className={styles.sotial_img}>
          <p className={styles.p_social}>Socials</p>
          <div className={styles.img_footer}>
            <img src={instagram} alt="instagram" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
      </div>


      <div className={styles.footer_adress}>
        <div className={styles.adress}>
          <p className={styles.p_adress}>Address</p>
          <p className={styles.p_adress_berlin}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>



        <div className={styles.working}>
          <p className={styles.p_working}>Working Hours</p>
          <p className={styles.p_hours}>24 hours a day</p>
        </div>
      </div>

    <img className={styles.map} src={map} alt="map" />
    </footer>
  )
}

export default Footer;

