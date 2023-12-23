import React from "react";
import {Card}  from "reactstrap";
import "./NotFound.css"

function NotFound() {
  return (
    <div>
        <Card>
        <h2 className="h1">Page Not Found</h2>
      <p className="p">Oops! The page you're looking for doesn't exist.</p>
        </Card>
</div>
  );
}

export default NotFound;
