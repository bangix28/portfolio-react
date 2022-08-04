import React, {useState} from 'react';
import '../styles/home.scss'
import {useSpring, animated, config} from 'react-spring'


const Home = () => {

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

    const propsParagraph = AppearAnimation(1000);

    const propsImage = AppearAnimation(1500);

    const propsButton = AppearAnimation(2000);

    return (
        <div className="home-container">
            <animated.div style={propsImage}><img className="img-responsive" alt="Image de Kénolane Granger" src="https://dummyimage.com/600x600/fff/aaa\n"/></animated.div>
            <animated.h1  style={propsTitle}>Kénolane Granger</animated.h1>
            <animated.p style={propsParagraph}>Développeur Web</animated.p>
            <animated.a style={propsButton} href="acceuil"><img src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-down.png"/></animated.a>
        </div>
    );
};

export default Home;