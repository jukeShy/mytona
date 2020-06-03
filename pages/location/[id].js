import React, { useEffect, useState } from 'react';
import { ApiService } from '../../api.service';
import { Card, Info, HistoryLink, List, PageLink } from '../../components';
import useWindowDimensions from '../../hook/useWindowDimension';

const Location = ({ location: { type, name, residents } }) => {
  const { width } = useWindowDimensions();
  const [listCount, setListCount] = useState(3);

  const initListCountByWidth = (width) => {
    if (width > 1200) {
      return setListCount(8);
    } else if (width === 960) {
      return setListCount(6);
    } else {
      return setListCount(3);
    }
  };

  useEffect(() => {
    initListCountByWidth(width);
  }, []);

  const _residents = residents.map((resident) => {
    const {
      id,
      name,
      image,
      origin: { name: originName },
      species,
    } = resident;

    return (
      <PageLink href={`/resident/[id]`} as={`/resident/${id}`} key={id}>
        <Card primary>
          <Card.Media>
            <Card.Image src={image} />
          </Card.Media>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{originName}</Card.Text>
            <Card.Text>{species}</Card.Text>
          </Card.Body>
        </Card>
      </PageLink>
    );
  });

  return (
    <>
      <div className='row'>
        <div className='col col-4'>
          <Info>
            <HistoryLink href='/' />
            <Info.Media>
              <Info.Image src={`../images/types/${type}.png`} alt={name} />
            </Info.Media>
            <Info.Body>
              <Info.Title>{name}</Info.Title>
              <Info.Text>{type}</Info.Text>
            </Info.Body>
          </Info>
        </div>
        <div className='col col-8'>
          <List id='residents'>
            <List.Title>Residents</List.Title>
            <List.Body start={listCount} countInc={listCount}>
              {_residents}
            </List.Body>
          </List>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const apiService = ApiService();
  const { id } = context.query;
  const query = `
    query {
      location(id: ${id}) {
        name,
        type,
        residents {
          id,
          name,
          origin {
            name 
          }
          species,
          image
        }
      }
    }
  `;

  const { data } = await apiService.get({ query });

  return {
    props: { location: data.location },
  };
}

export default Location;
