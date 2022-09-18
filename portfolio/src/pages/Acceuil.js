import Header from "../components/Header";
import React, {useState} from "react";
import Footer from "../components/Footer";
import {useSpring, animated, config} from 'react-spring';




const Acceuil = () => {
    const [flip, set] = useState(false)
    function AppearAnimation(animation_delay) {
        return useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: animation_delay,
            config: config.molasses,
            onRest: () => set(!flip),
        })
    }

    const propsTitle = AppearAnimation(500);


    return (
        <div>
            <Header/>
            <div className="container-about-me">
                <article className="about-me">
                    <animated.div style={AppearAnimation(600)} className="image-about-me">
                    <img  src="https://dummyimage.com/600x400/000/fff&text=Test" alt="images"/>
                    </animated.div>
                    <animated.div style={AppearAnimation(800)} className="about-me-content">
                        <h2>Développeur PHP</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum mattis tellus, ac vehicula eros sodales sit amet. Etiam porta bibendum fermentum. Suspendisse sagittis, urna ac semper semper, nunc metus feugiat nibh, a commodo ex metus a urna. Suspendisse augue dolor, auctor sed purus in, vestibulum rhoncus elit. Nulla facilisi. Pellentesque sed fermentum augue. Proin vitae ligula sit amet magna fermentum auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse malesuada ipsum vitae orci eleifend tincidunt.

                            Sed neque mauris, tincidunt id sem a, fermentum fermentum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec justo turpis, feugiat vel mauris in, maximus faucibus urna. Aenean porttitor enim nec nibh rhoncus auctor. Donec a ipsum vel ipsum consectetur vestibulum. Phasellus nisl metus, viverra a lacinia tempus, fringilla ac metus. Etiam interdum, velit non pharetra tristique, lacus justo pretium enim, vel suscipit eros nulla ac arcu. Duis accumsan egestas ligula, a mattis risus imperdiet sit amet.</p>
                    </animated.div>
                </article>
                <article className="about-me">
                    <animated.div style={AppearAnimation(800)} className="about-me-content">
                        <h2>Développeur PHP</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum mattis tellus, ac vehicula eros sodales sit amet. Etiam porta bibendum fermentum. Suspendisse sagittis, urna ac semper semper, nunc metus feugiat nibh, a commodo ex metus a urna. Suspendisse augue dolor, auctor sed purus in, vestibulum rhoncus elit. Nulla facilisi. Pellentesque sed fermentum augue. Proin vitae ligula sit amet magna fermentum auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse malesuada ipsum vitae orci eleifend tincidunt.

                            Sed neque mauris, tincidunt id sem a, fermentum fermentum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec justo turpis, feugiat vel mauris in, maximus faucibus urna. Aenean porttitor enim nec nibh rhoncus auctor. Donec a ipsum vel ipsum consectetur vestibulum. Phasellus nisl metus, viverra a lacinia tempus, fringilla ac metus. Etiam interdum, velit non pharetra tristique, lacus justo pretium enim, vel suscipit eros nulla ac arcu. Duis accumsan egestas ligula, a mattis risus imperdiet sit amet.</p>
                    </animated.div>
                    <animated.div style={AppearAnimation(600)} className="image-about-me">
                        <img  src="https://dummyimage.com/600x400/000/fff&text=Test" alt="images"/>
                    </animated.div>

                </article>
            </div>
            <Footer/>
        </div>
    );
};

export default Acceuil;

