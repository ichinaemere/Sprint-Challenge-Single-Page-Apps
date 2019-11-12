import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function CharacterCard(props) {
  console.log("char card", props);
  return (
    <Card>
      <img src={props.image} alt="{props.name}"  wrapped ui={false} />
      <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.species} ({props.status})</Card.Meta>
      {/* <Card.Description>
      {/* <p>Location: {props.location.name}</p> */}
      {/* <p>Origin: {props.origin.name}</p> */}
      {/*</Card.Description> */}
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        X Episodes
      </a>
    </Card.Content>
    </Card>
  );
}