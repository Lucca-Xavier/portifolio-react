import Container from '../../components/Container'
import { Link } from 'react-router-dom'
import styles from '../Home/Home.module.css'
import macaco from '../Home/macaco.svg'



function Home() {
    return (
       <>
<Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Lucca Campos</span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={macaco} alt="Imagem de Home" />
      </figure>
  </section>
</Container>
        </> 
    )
}

export default Home