import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";


const Article = () => {

    let articleId = useParams();
    console.log(articleId);

    let data = {
        title: "Web Development",
        text: "I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.I am a web developer with a passion for building web applications. I have a background in computer science and I am currently working on my own projects.",
        image: "https://dummyimage.com/1920x1080/fff/aaa\\n"
    }

    return (
        <div className={"page-background"}>
            <Header/>
            <div className={"container"}>
                <article className={"article"}>
                    <div>
                        <img className={"article-image"} src={data.image} alt={"image d'article"}/>
                    </div>
                    <div className={"article-title"}>
                        <h1>{data.title}</h1>
                    </div>
                    <div className={"article-text"}>
                        <p>{data.text}</p>
                    </div>

                </article>
            </div>
            <Footer/>
        </div>
    );
};

export default Article;

