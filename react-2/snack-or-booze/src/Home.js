import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function Home({ snacks, drinks }) {
  const renderItems = (items, title) => (
    <div> {/* Changed from <> to <div> */}
      <h4>{title}</h4>
      <ul>
        {items.slice(0, 10).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="col-md-8">
    <Card>
      <CardBody className="text-center">
        <div> {/* Replaced CardTitle with div */}
          <h3 className="font-weight-bold">
            Welcome to Silicon Valley's premier dive cafe!
          </h3>
        </div>
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

