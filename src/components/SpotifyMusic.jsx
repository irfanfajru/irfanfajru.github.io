export default function SpotifyMusic() {
    return (
        <>
            <iframe
                className="absolute bottom-5 right-5 md:right-5 md:bottom-5 md:left-auto md:translate-x-0 left-1/2 -translate-x-1/2 md:transform-none rounded-xl z-[45]"
                src="https://open.spotify.com/embed/track/7n64vC6dLyGOuyi0An8b5O?utm_source=generator&theme=0"
                width="300"
                height="80"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </>
    );
}
