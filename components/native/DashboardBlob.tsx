export default function DashboardBlob() {
    return (
        <>
            <canvas
                className="absolute size-[140rem] blur-2xl z-20"
                id="bubble"
            ></canvas>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.js"></script>
            <script src="scripts/perlin.js"></script>
            <script src="scripts/script.js"></script>
        </>
    );
}
