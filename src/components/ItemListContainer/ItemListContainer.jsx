import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ItemListContainer.css";

const ItemListContainer = ({productsData}) => {

return (
    <div>
    {productsData.map((product) => {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Button variant="primary">Detalles</Button>
                </Card.Body>
            </Card>

        );
    })}
</div>
);
};

export default ItemListContainer;