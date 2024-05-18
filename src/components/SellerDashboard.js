import React,{useState} from 'react'

import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

function SellerDashboard(){
    const[properties,setPoperties] = useState([]);

    const addProperty = (property) =>{
        setPoperties([...properties,property]);
    
    };
    const updateProperty = (updatedProperty) =>{
        setPoperties(
            properties.map((prop) => 
            prop.id === updatedProperty.id ? updatedProperty : prop)
        );
    
    };
    const deleteProperty = (propertyId) => {
        setPoperties(properties.filter((prop) => prop.id !== propertyId ));
    };

    return (
        <div>
            <h2>Seller Dashboard</h2>
            <PropertyForm addProperty={addProperty}/>
            <PropertyList 
            properties={properties}
            updateProperty={updateProperty}
            deleteProperty={deleteProperty}
            isSeller = {true}
            />
        </div>
    );
}

export default SellerDashboard;
