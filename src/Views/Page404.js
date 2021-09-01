import { tsParticles } from "tsparticles";
import '../Assets/Css/Page404.css';

function Page404() {

    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 100
            },
            move: {
                enable: true
            },
            color: {
                value: "random",
                animation: {
                    enable: true,
                    speed: 40,
                    sync: true
                }
            },

            shape: {
                type: "circle",
            },

            size: {
                value: 10,
                random: true,
                animation: {
                    enable: true,
                    speed: 20,
                    minimumValue: 0.5,
                    sync: false
                }
            },

            links: {
                enable: true,
                distance: 100,
                color: "#fff",
                opacity: 0.6,
                width: 1
            },

        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 100
                },
                push: {
                    quantity: 2
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,


    });

    return (
        <div id="tsparticles">
            
            
        </div>
    )
}

export default Page404;