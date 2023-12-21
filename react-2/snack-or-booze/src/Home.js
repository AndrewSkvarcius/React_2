import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({ snacks, drinks }) {
  // Function to display a list of items (snacks or drinks)
  const renderItems = (items, title) => (
    <>
      <h4>{title}</h4>
      <ul>
        {items.slice(0, 5).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            {snacks.length > 0 && renderItems(snacks, "Featured Snacks")}
            {drinks.length > 0 && renderItems(drinks, "Featured Drinks")}
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

