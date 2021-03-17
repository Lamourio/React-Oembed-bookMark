import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
export function SearchPreview({ preview, result, onSave, onDiscard }) {
    if (preview === false) return null;
    const { success, codeError, msg } = result;
    if (success)
        return (
            
            <Card >
                <Card.Img variant="top" src={msg.thumbnail_url} />
                <Card.Body>
                    <Card.Title>Preview</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>author name : {msg.author_name}</ListGroupItem>
                    <ListGroupItem>title : {msg.title}</ListGroupItem>
                    <ListGroupItem>date d'ajout {msg.upload_date}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="outline-primary" onClick={onSave}>Add</Button>
                    {" "}
                    <Button variant="outline-info" onClick={onDiscard}>close</Button>
                </Card.Body>
            </Card>

        )
    if(!success) return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Failed to load the media</Card.Title>
            <Card.Text>
                please check your url 
            </Card.Text>
            <Button variant="outline-info" onClick={onDiscard}>close</Button>
        </Card.Body>
    </Card>
    )

}
