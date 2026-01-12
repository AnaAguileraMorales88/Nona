    function VideoPlayer() {
    return (
        <section className="bg-[#FCFAEE] py-16 px-6">
        <article className="max-w-5xl mx-auto">
            <h2 className="text-[#4A4238] text-center text-xl md:text-2xl font-bold mb-12 uppercase tracking-wide">
            Teaser
            </h2>

            <figure className="w-full aspect-video">
            <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/vZFqUg5VY_Y"
                title="Teaser del cortometraje NONA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </figure>
        </article>
        </section>
    )
    }

    export default VideoPlayer