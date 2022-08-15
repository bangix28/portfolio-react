import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {db} from "../firebase.config";
import Cards from "../components/Cards";


const Acceuil = () => {
    //getting data from firebase and setting it to state variable for foreach loop
const [data, setData] = useState([]);
    useEffect(() => {
            db.collection("articles").get().then(snapshot => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(data);
            }).catch(error => {
                console.log(error);
            })
        }
        , []);

    useEffect(() => {
        document.title = "Acceuil"
    }, []);

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

