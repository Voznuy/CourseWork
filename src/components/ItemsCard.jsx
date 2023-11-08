import Card from 'react-bootstrap/Card';

function ItemCard({ item }) {
    return (
        <Card border="dark"
            style={{
                width: '100%',
                height: '200px'
            }}>
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
                <Card.Title>Price item: {item.price}</Card.Title>
                <Card.Text>
                    Count item: {item.count}
                    <br></br>
                    Delivery date: {item.delivery_date}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;