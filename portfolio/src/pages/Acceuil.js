import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";


const Acceuil = () => {

    let data = [
        {
            title: "Web Development",
            text: "I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.",
            image: "https://dummyimage.com/450x350/fff/aaa\\n"
        },
        {
            title: "Web Design I am a web designer with a passion for designing web applications. I have a background in computer science and I am",
            text: "I am a web designer with a passion for designing web applications. I have a background in computer science and I am currently working on my own projects.  I am a web designer with a passion for designing web applications. I have a background in computer science and I am currently working on my own projects.",
            image: "https://dummyimage.com/450x350/fff/aaa\\n"

        }
    ]

    return (
        <div className={"page-background"}>
            <Header/>
            <div className={"container"}>
                <section className={"cards"}>
                {data.map(cards => (
                        <Cards key={cards.id} card={cards}/>
                ))}
                </section>
            </div>
        </div>
    );
};


export default Acceuil;

