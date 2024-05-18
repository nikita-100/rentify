import Recat from 'react';

function PropertyList({properties,updateProperty,deleteProperty,isSeller}){
    return(
        <div>
            <h2>Property List</h2>
            
            {properties.map((property) => (
                <div key={property.id}>

            <p>Place: {property.place}</p>
            <p>Area: {property.area}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Nearby Hospitals : {property.nearbyHospitals}</p>
            <p>Nearby Colleges : {property.nearbyColleges}</p>
            {isSeller && (
                <>
                <button onClick={() => updateProperty(property)}>Update</button>
                <button onClick={() => deleteProperty(property.id)}>Delete</button>
                </>
            )}

            {!isSeller && <button onClick={() => alert('contact seller')}>I am interested</button>}
            </div>
        ))}
        </div>
    )
}

export default PropertyList;