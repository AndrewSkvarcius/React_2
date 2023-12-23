import React from "react";
import { Link } from "react-router-dom";
import "./MenuList.css";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";

  function MenuList({ items, title, itemType, deleteItem}) {
  return (
    <section className="col-md-4">
    <Card>
      <CardBody>
        <CardTitle className="font-weight-bold text-center">
          {title}
        </CardTitle>
        <CardText>
            TRY ONE OF OUR MANY DRINKS
        </CardText>
        <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item.id}>
            <Link to={`/${itemType}/${item.id}`}>{item.name}</Link>
            <Button size="sm" color="danger" outline onClick={() => deleteItem(item.id)}>Delete</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      </CardBody>
    </Card>
  </section>
  );
}

export default MenuList;


