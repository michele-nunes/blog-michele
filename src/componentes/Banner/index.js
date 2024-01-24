import styles from './Banner.module.css';
import circuloColorido from './../../assets/circulo_colorido.png';
import foto_perfil from './../../assets/foto_perfil.png';


export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!

                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Michele, engenheira de software. Aqui compartilho vários conhecimentos, espero que aprenda algo novo.

                </p>

            </div>

            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />
            <img
                className={styles.foto_perfil}
                src={foto_perfil}
                alt='Foto sorrindo'
                />
                

            </div>

        </div>
    )
}