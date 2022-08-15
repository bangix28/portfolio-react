import * as React from "react";
import {Image} from "react-bootstrap";
import {storage} from "../firebase.config";
import {useEffect, useState} from "react";


const Cards = ({card}) => {

       const [image, setImage] = useState(null);
useEffect(() => {
    storage.ref(card.image).getDownloadURL().then(url => {
        setImage(url);
    }).catch(error => {
        console.log(error);
    });
});

    return (
            <article className={"card"}>
                <div className={"card-image"}>
                    <a href={"/article/"+ card.id}>
                        <Image className={"card-image-responsive"} src={image} alt=""/>
                    </a>
                </div>
                <div className={"card-content"}>
                    <a href={"#"}>
                    <div className={"card-title"}>
                        <h3>{card.title.substring(0, 45)}</h3>
                    </div>
                    <div className={"card-text"}>
                        <p>{card.content.substring(0, 185)}</p>
                    </div>
                    </a>
                </div>
            </article>
    );
}
export default Cards