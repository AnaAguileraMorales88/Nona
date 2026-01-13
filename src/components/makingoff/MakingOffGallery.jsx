        import Carousel from '../shared/Carousel'
        import img1 from '../../assets/makingoff/bcn1.jpg'
        import img2 from '../../assets/makingoff/bcn2.jpg'
        import img3 from '../../assets/makingoff/bcn3.jpg'
        import img4 from '../../assets/makingoff/bcn4.jpg'
        import img5 from '../../assets/makingoff/bcn5.jpg'
        import img6 from '../../assets/makingoff/bcn6.jpg'
        import img7 from '../../assets/makingoff/bcn7.jpg'
        import img8 from '../../assets/makingoff/bcn8.jpg'
        import img9 from '../../assets/makingoff/mex.jpg'
        import img10 from '../../assets/makingoff/mex1.jpg'
        import img11 from '../../assets/makingoff/mex2.jpg'
        import img12 from '../../assets/makingoff/mex3.jpg'
        import img13 from '../../assets/makingoff/mex4.jpg'
        import img14 from '../../assets/makingoff/mex5.jpg'
        import img15 from '../../assets/makingoff/mex6.jpg'
        import img16 from '../../assets/makingoff/mex7.jpg'
        import img17 from '../../assets/makingoff/mex8.jpg'
        import img18 from '../../assets/makingoff/mex9.jpg'
        import img19 from '../../assets/makingoff/mex10.jpg'
        import img20 from '../../assets/makingoff/mex11.JPG'
        import img21 from '../../assets/makingoff/mex12.jpg'
        import img22 from '../../assets/makingoff/mex13.jpg'
        import img23 from '../../assets/makingoff/mex14.jpg'
        import img24 from '../../assets/makingoff/mex15.jpg'
        import img25 from '../../assets/makingoff/mex16.jpg'
        import img26 from '../../assets/makingoff/mex17.jpg'
        import img27 from '../../assets/makingoff/mex18.jpg'




        function MakingOffGallery() {
            const images = [
                { src: img1, alt: 'Behind the scenes 1' },
                { src: img2, alt: 'Behind the scenes 2' },
                { src: img3, alt: 'Behind the scenes 3' },
                { src: img4, alt: 'Behind the scenes 4' },
                { src: img5, alt: 'Behind the scenes 5' },
                { src: img6, alt: 'Behind the scenes 6' },
                { src: img7, alt: 'Behind the scenes 7' },
                { src: img8, alt: 'Behind the scenes 8' },
                { src: img9, alt: 'Behind the scenes 9' },
                { src: img10, alt: 'Behind the scenes 10' },
                { src: img11, alt: 'Behind the scenes 11' },
                { src: img12, alt: 'Behind the scenes 12' },
                { src: img13, alt: 'Behind the scenes 13' },
                { src: img14, alt: 'Behind the scenes 14' },
                { src: img15, alt: 'Behind the scenes 15' },
                { src: img16, alt: 'Behind the scenes 16' },
                { src: img17, alt: 'Behind the scenes 17' },
                { src: img18, alt: 'Behind the scenes 18' },
                { src: img19, alt: 'Behind the scenes 19' },
                { src: img20, alt: 'Behind the scenes 21' },
                { src: img21, alt: 'Behind the scenes 21' },
                { src: img22, alt: 'Behind the scenes 22' },
                { src: img23, alt: 'Behind the scenes 23' },
                { src: img24, alt: 'Behind the scenes 24' },
                { src: img25, alt: 'Behind the scenes 25' },
                { src: img26, alt: 'Behind the scenes 26' },
                { src: img27, alt: 'Behind the scenes 27' }
            ]

            return (
    <section className="bg-[#FCFAEE] min-h-screen px-4 pt-32 pb-8">
    <article className="max-w-4xl mx-auto">
        <h2 className="text-[#4A4238] text-center text-xl md:text-2xl font-bold mb-10 uppercase tracking-wide">
        Imágenes de lo que no se ve
        </h2>

        <figure className="p-4">
        <Carousel
            images={images}
            autoPlayInterval={4000}
            height="600px"
        />
        </figure>
    </article>
    </section>
            )
        }

        export default MakingOffGallery
