import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {db, storage} from "../firebase.config";


const Article = () => {

    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    let articleId = useParams();

    useEffect(() => {
        document.title = "Article"
        db.collection("articles").doc(articleId.article).get().then(doc => {
            console.log("test");
            setData(doc.data());
            storage.ref(doc.data().image).getDownloadURL().then(url => {
                setImage(url);
            });
        })
    }, []);



    return (
        <div className={"page-background"}>
            <Header/>
            <div className={"container"}>
                <article className={"article"}>
                    <div>
                        <img className={"article-image"} src={image} alt={"image d'article"}/>
                    </div>
                    <div className={"article-title"}>
                        <h1>{data.title}</h1>
                    </div>
                    <div className={"article-text"}>
                        <p>{data.content}</p>
                    </div>

                </article>
            </div>
            <Footer/>
        </div>
    );
};

export default Article;

