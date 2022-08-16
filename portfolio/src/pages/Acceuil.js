import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {db} from "../firebase.config";
import Cards from "../components/Cards";


const Acceuil = () => {
const [data, setData] = useState([]);
    useEffect(() => {
            document.title = "Acceuil"

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
        <div className={"page-background"}>
            <Header/>
            <div className={"container"}>
                <section className={"cards"}>
                    //create a map loop to display data from firebase  with cards component
                    {data.map(item => (
                        <Cards key={item.id} card={item}/>
                    ))}

                </section>
            </div>
            <Footer/>
        </div>
    );
};


export default Acceuil;

