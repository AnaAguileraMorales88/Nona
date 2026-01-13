    import Carousel from '../shared/Carousel'
    import image1 from '../../assets/carousel/Nona5.jpg'
    import image2 from '../../assets/carousel/Nona6.jpg'
    import image3 from '../../assets/carousel/Nona2.png'
    import image4 from '../../assets/carousel/Luna3.jpg'
    import image5 from '../../assets/carousel/Nona3.png'
    import image6 from '../../assets/carousel/Nona4.png'
    import image7 from '../../assets/carousel/Nona7.jpg'

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
        <section className="bg-[#FCFAEE] py-16 px-6">
        <article className="max-w-6xl mx-auto">
            <Carousel images={images} autoPlayInterval={2000} height="500px" />
        </article>
        </section>
    )
    }

    export default Story