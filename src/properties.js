const baseEndpoint =
    'https://9y8a1vnba9.execute-api.eu-west-1.amazonaws.com/v1';


export
const roomsEndpoint = 
    `${baseEndpoint}/rooms/`;

 
export
const itemsEndpoint =
    `${baseEndpoint}/items/`;


const properties = {
    roomsEndpoint,
    itemsEndpoint
};


export default properties;