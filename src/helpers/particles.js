import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {useStateValue} from "@/states/StateProvider"

const ParticlesComponent = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const [{theme}] = useStateValue()

    return (
        <Particles
            id="tsParticles"
            init={particlesInit}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 200,
                            duration:0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme==='dark'?"#ffffff":"#3d3d3d",
                    },
                    links: {
                        color:theme==='dark'?"#ffffff":"rgba(0,0,0,0.42)",
                        distance: 140,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent