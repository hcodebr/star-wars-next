import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars Intro</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main id={styles['star-wars-main']}>

        <section id={styles["long-time-ago"]}>
            <h2>Há muito tempo, em uma galáxia muito, muito distante...</h2>
        </section>

        <img id={styles["star-wars-logo"]} src="/star-wars.svg" alt="Logo de Star Wars" />

        <section id={styles["intro-resume"]}>
            <div>
                <div id={styles["movie-title"]}>
                    <h2>Episódio IV</h2>
                    <h2>UMA NOVA ESPERANÇA</h2>
                </div>
                <p>É um período de guerra civil. Partindo de uma base secreta, naves rebeldes atacam e conquistam sua primeira vitória contra o perverso Império Galáctico.</p>
                <p>Durante a batalha, espiões rebeldes conseguem roubar os planos secretos da arma decisiva do Império, a ESTRELA DA MORTE, uma estação espacial blindada com poder suficiente para destruir um planeta inteiro.</p>
                <p>Perseguida pelos sinistros agentes do Império, a princesa Léia apressa-se em voltar para casa a bordo de sua nave estelar protegendo os planos roubados que podem salvar seu povo e restaurar a liberdade na galáxia...</p>
            </div>
        </section>

      </main>

    </div>
  )
}
