import React from 'react';
import { ApiService } from '../../api.service';
import { HistoryLink, Info } from '../../components';

const Resident = ({ resident }) => {
  const {
    image,
    name,
    location: { name: locationName, id: locationID },
    species,
    status,
    origin: { name: originName },
  } = resident;

  return (
    <>
      <Info>
        <div className='row'>
          <div className='col-4'>
            <HistoryLink
              href='/location/[id]'
              as={`/location/${locationID}#residents`}
            />
            <Info.Media>
              <Info.Image src={image} alt={name} />
            </Info.Media>
          </div>
          <div className='col-8'>
            <Info.Body>
              <Info.Title>{name}</Info.Title>
              <Info.Text>{locationName}</Info.Text>
              <Info.Text>{species}</Info.Text>
              <Info.Title Type='h3'>
                Status: <br />
                {status}
              </Info.Title>
              <Info.Title Type='h3'>
                Home planet: <br />
                {originName}
              </Info.Title>
            </Info.Body>
          </div>
        </div>
      </Info>
    </>
  );
};

export async function getServerSideProps(context) {
  const apiService = ApiService();
  const { id } = context.query;
  const query = `
    query {
      character(id: ${id}) {
        id,
        image,
        name,
        species,
        status,
        origin {
          name,
          type,
        },
        location {
          id,
          name
        }
        
      }
    }
  `;

  const { data } = await apiService.get({ query });

  return { props: { resident: data.character } };
}

export default Resident;
