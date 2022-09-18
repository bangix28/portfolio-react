import * as React from "react";
import {storage} from "../firebase.config";
import {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";
import {useHref} from "react-router-dom";


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
                <Card sx={{
                    width: {
                        sx: 1.0, // 100%
                        sm: 1.0,
                        md: 325,
                        lg: 500
                    },
                }}>
                    <CardActionArea href={"/article/"+ card.id}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent sx={{
                        height: {
                            sx: 1.0, // 100%
                            sm: 1.0,
                            md: 275,
                            lg: 1.0
                        },
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title.substring(0, 45)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>{card.content.substring(0, 185)}</p>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </article>
    );
}
export default Cards