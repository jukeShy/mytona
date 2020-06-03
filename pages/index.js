import React, { useState, useEffect } from 'react';
import { ApiService } from '../api.service';
import { PageLink, Card, List } from '../components';

const Index = ({ locations }) => {
  const _locations = locations.map((location) => {
    const { id, type, name, residents } = location;

    return (
      <PageLink href='/location/[id]' as={`/location/${id}`} key={id}>
        <Card>
          <Card.Media>
            <Card.Image src={`/images/types/${location.type}.png`} alt={name} />
          </Card.Media>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{type}</Card.Text>
            {residents[0].id === null || (
              <Card.Row>
                {residents.slice(0, 3).map((resident) => (
                  <Card.RowItem item={resident} key={resident.id} />
                ))}
              </Card.Row>
            )}
          </Card.Body>
        </Card>
      </PageLink>
    );
  });

  return (
    <List>
      <List.Body start={4} countInc={4}>
        {_locations}
      </List.Body>
    </List>
  );
};

export async function getServerSideProps(context) {
  const apiService = ApiService();
  const query = `
    query {
      locations(page: 1) {
        results {
          id,
          name,
          type,
          residents {
            id,
            image
          }
        }
      }
    }
  `;

  const { data } = await apiService.get({ query });

  return { props: { locations: data.locations.results } };
}

export default Index;
