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
        <div>
            <Header/>
            <div className={"container-article"}>

                <article className={"article"}>
                    <div>
                        <h1 className={"article-title"}>{data.title}</h1>
                    </div>
                    <div>
                        <img className={"image-responsive"} src={image} alt={data.title}/>
                    </div>
                    <div className={"article-content"}>
                        <p>{data.content}</p>
                    </div>
                </article>
            </div>
            <Footer/>
        </div>
    );
};

export default Article;

