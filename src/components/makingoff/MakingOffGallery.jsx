import Carousel from '../shared/Carousel'
import img2 from '../../assets/makingoff/bcn2.webp'
import img3 from '../../assets/makingoff/bcn3.webp'
import img4 from '../../assets/makingoff/bcn4.webp'
import img5 from '../../assets/makingoff/bcn5.webp'
import img6 from '../../assets/makingoff/bcn6.webp'
import img7 from '../../assets/makingoff/bcn7.webp'
import img8 from '../../assets/makingoff/bcn8.webp'
import img9 from '../../assets/makingoff/mex.webp'
import img10 from '../../assets/makingoff/mex1.webp'
import img11 from '../../assets/makingoff/mex2.webp'
import img12 from '../../assets/makingoff/mex3.webp'
import img13 from '../../assets/makingoff/mex4.webp'
import img14 from '../../assets/makingoff/mex5.webp'
import img15 from '../../assets/makingoff/mex6.webp'
import img16 from '../../assets/makingoff/mex7.webp'
import img17 from '../../assets/makingoff/mex8.webp'
import img18 from '../../assets/makingoff/mex9.webp'
import img19 from '../../assets/makingoff/mex10.webp'
import img20 from '../../assets/makingoff/mex11.webp'
import img21 from '../../assets/makingoff/mex12.webp'
import img22 from '../../assets/makingoff/mex13.webp'
import img23 from '../../assets/makingoff/mex14.webp'
import img24 from '../../assets/makingoff/mex15.webp'
import img25 from '../../assets/makingoff/mex16.webp'
import img26 from '../../assets/makingoff/mex17.webp'
import img27 from '../../assets/makingoff/mex18.webp'
import img28 from '../../assets/makingoff/bcn.webp'


function MakingOffGallery() {
    const images = [
        
        { src: img2, alt: 'Detrás de cámaras 2' },
        { src: img3, alt: 'Detrás de cámaras 3' },
        { src: img4, alt: 'Detrás de cámaras 4' },
        { src: img5, alt: 'Detrás de cámaras 5' },
        { src: img6, alt: 'Detrás de cámaras 6' },
        { src: img7, alt: 'Detrás de cámaras 7' },
        { src: img8, alt: 'Detrás de cámaras 8' },
        { src: img9, alt: 'Detrás de cámaras 9' },
        { src: img10, alt: 'Detrás de cámaras 10' },
        { src: img11, alt: 'Detrás de cámaras 11' },
        { src: img12, alt: 'Detrás de cámaras 12' },
        { src: img13, alt: 'Detrás de cámaras 13' },
        { src: img14, alt: 'Detrás de cámaras 14' },
        { src: img15, alt: 'Detrás de cámaras 15' },
        { src: img16, alt: 'Detrás de cámaras 16' },
        { src: img17, alt: 'Detrás de cámaras 17' },
        { src: img18, alt: 'Detrás de cámaras 18' },
        { src: img19, alt: 'Detrás de cámaras 19' },
        { src: img20, alt: 'Detrás de cámaras 20' },
        { src: img21, alt: 'Detrás de cámaras 21' },
        { src: img22, alt: 'Detrás de cámaras 22' },
        { src: img23, alt: 'Detrás de cámaras 23' },
        { src: img24, alt: 'Detrás de cámaras 24' },
        { src: img25, alt: 'Detrás de cámaras 25' },
        { src: img26, alt: 'Detrás de cámaras 26' },
        { src: img27, alt: 'Detrás de cámaras 27' },
        { src: img28, alt: 'Detrás de cámaras 28' }
    ]

    return (
        <section className="bg-[#FCFAEE] px-2 md:px-4 pt-28 md:pt-36 pb-8 overflow-x-hidden">
            <article className="max-w-full md:max-w-4xl mx-auto">
                <h2 className="text-[#4A4238] text-center text-xl md:text-xl font-bold mt-4 mb-4 md:mb-10 uppercase tracking-wide px-2">
                    Descubre el detrás de cámaras de nuestra película
                </h2>

                <figure className="w-full overflow-hidden">
                    <Carousel
                        images={images}
                        autoPlayInterval={5000}
                        height="400px"
                    />
                </figure>
            </article>
        </section>
    )
}

export default MakingOffGallery