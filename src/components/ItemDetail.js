import { Box } from "@mui/system";
import ItemCount from "./ItemCount";
import { ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import LinearIndeterminate from './LinearIndeterminate';

const ItemDetail = ({item}) =>{
    const onAdd = (rta) => {
        alert("Has seleccionado  " + rta + "  hamburguesas.");
    }
    return(
        <>
        { item.image?
        <Box className="container">
            <Box className="imgContainer" >
                <ImageDetail src={item.image}/>
            </Box>
            <InfoContainer>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <Price>$ {item.price}</Price>
                <Desc>{item.stock} unidades disponibles</Desc>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
             </InfoContainer>
        </Box>
        :<LinearIndeterminate />
        }
        </>

    );
}

export default ItemDetail;