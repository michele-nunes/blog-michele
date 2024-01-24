import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMi from "../../assets/foto_sobre_mi.png"

export default function SobreMim(){
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim">
            
            
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Michele!
            </h3>
            
            <img
                src={fotoSobreMi}
                alt="Foto da Michele sorrindo"
                className={styles.fotoSobreMi}
            />
            <p className={styles.paragrafo}>
                Sou Michele formada em Análise e desenvolvimento de sistemas pela Fatec São José dos campos, atuo a 4 anos como Programadora front end, usando as ferramentas mais atuais no mercado.
                
            </p>
            <p className={styles.paragrafo}>
                Nasci em Pernambuco e como uam boa pernambucana, mas moro em São Paulo a mais de dez anos, como uma boa nordestina  sou arretada, adoro calor e sol.
            </p>
            <p className={styles.paragrafo}>
                Minha história com a programação começo em 2015 quando passei no vestibular da Fatec e pasmem eu nunca pensei em ser programadora sempre achei que me daria melhor na área da saúde e não é atoa que prestei vestibular de Medicina dois anos consecutivos, obviamente não passei e voltei a estudar para o vestibular. Sempre fui muito ligada a tecnologia, amava aprelhos tecnológicos e sempre amei rede sociais, inclusive eu era viciada em Orkut r MSN hahaha.
                
            </p>
            <p className={styles.paragrafo}>
                Um dia conversando com uma das minhas melhores amigas que tbm estava na fase de vestibular e eu me lamentando de não saber o que queria fazer já que medicina parecia um sonho distante. Ela me orientou a tentar tecnologia já que eu amava todo esse mundo de internet e redes sociais, e foi aé que pensei: porque não né ? 
            </p>
            <p className={styles.paragrafo}>
                Me inscrevi no vestibular do meio do ano da Fatec e simmmmm passei, comecei a fazer ADS e adorei o curso alguns semestres depois consegui o meu primeiro estágio e um ano depois o meu primeiro emprego na área como front end. 
            </p>
        </PostModelo>
        
    )
}