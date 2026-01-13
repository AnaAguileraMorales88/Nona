    import Carousel from '../shared/Carousel'
    import img1 from '../../assets/makingoff/bcn1.jpg'
    import img2 from '../../assets/makingoff/bcn2.jpg'

    function MakingOffGallery() {
    const images = [
        { src: img1, alt: 'Behind the scenes 1' },
        { src: img2, alt: 'Behind the scenes 2' },
    ]

    return (
        <section className="bg-[#DED1B6] min-h-screen px-4 pt-[300px] pb-16">
        <article className="max-w-6xl mx-auto">
            <h2 className="text-[#4A4238] text-center text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide">
            Making Off
            </h2>

            <div className="p-4">
            <Carousel
                images={images}
                autoPlayInterval={4000}
                height="500px"
            />
            </div>
        </article>
        </section>
    )
    }

    export default MakingOffGallery
