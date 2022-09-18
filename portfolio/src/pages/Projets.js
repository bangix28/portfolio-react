import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {db} from "../firebase.config";
import Cards from "../components/Cards";


const Projets = () => {
const [data, setData] = useState([]);
    useEffect(() => {
            document.title = "Projets"

            db.collection("articles").get().then(snapshot => {
                const listArticles = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(listArticles);
            }).catch(error => {
                console.log(error);
            })
        }
        , []);

    return (
        <div>
            <Header/>
            <div className={"container"}>
                <section className={"cards"}>
                    {data.map(item => (
                        <Cards key={item.id} card={item}/>
                    ))}

                </section>
            </div>
            <Footer/>
        </div>
    );
};


export default Projets;

