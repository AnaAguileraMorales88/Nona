import Carousel from '../shared/Carousel'
import image1 from '../../assets/carousel/nona5.webp'
import image2 from '../../assets/carousel/nona6.webp'
import image3 from '../../assets/carousel/nona2.webp'
import image4 from '../../assets/carousel/luna3.webp'
import image5 from '../../assets/carousel/nona3.webp'
import image6 from '../../assets/carousel/nona4.webp'
import image7 from '../../assets/carousel/nona7.webp'

function Story() {
    const images = [
        { src: image1, alt: 'Imagen 1 de la historia' },
        { src: image2, alt: 'Imagen 2 de la historia' },
        { src: image3, alt: 'Imagen 3 de la historia' },
        { src: image4, alt: 'Imagen 4 de la historia' },
        { src: image5, alt: 'Imagen 5 de la historia' },
        { src: image6, alt: 'Imagen 6 de la historia' },
        { src: image7, alt: 'Imagen 7 de la historia' }
    ]

    return (
    <section id="gallery-carousel" className="bg-[#FCFAEE] py-8 md:py-16 px-6 scroll-mt-24">
      <article className="max-w-6xl mx-auto">
        <Carousel images={images} autoPlayInterval={2000} height="400px" />
      </article>
    </section>
  )
}

export default Story