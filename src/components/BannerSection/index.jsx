import bannerImage from "../../assets/banner-img.png"

export const BannerSection = () => {
  return (
    <section>
        <div>
            <h3>JOSEDASILVA</h3>
            <h2>Bem vindo ao meu portfólio</h2>
            <p>Uma frase interessante sobre mim</p>
            <button>Saiba Mais</button>
        </div>
        <img src={bannerImage} alt="Imagem do banner" />
    </section>
  )
}