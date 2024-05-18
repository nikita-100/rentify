import React,{useState} from "react";

function PropertyForm({addProperty}) {
    const [property,setProperty] = useState({
        place:'',
        area:'',
        bedrooms:'',
        bathrooms:'',
        nearbyHospitals:'',
        nearbyColleges:'',
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setProperty((prev) => ({...prev,[name]:value}));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        addProperty({...property,id:Date.now()});
        setProperty({
            place:'',
            area:'',
            bedrooms:'',
            bathrooms:'',
            nearbyHospitals:'',
            nearbyColleges:'',
        });

    };

    return(
        <form 
        onSubmit={handleSubmit}>
        <input
        type="text"
        name="place"
        placeholder="Place"
        value={property.place}
        onChange={handleChange}
        />
        <input
        type="text"
        name="area"
        placeholder="Area"
        value={property.place}
        onChange={handleChange}
        />

        <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={property.bedrooms}
        onChange={handleChange}
        />
        
        <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={property.bathrooms}
        onChange={handleChange}
        />
        
        <input
        type="text"
        name="nearbyHospitals"
        placeholder="Nearby Hospitals"
        value={property.nearbyHospitals}
        onChange={handleChange}
        />
        
        <input
        type="text"
        name="nearbyColleges"
        placeholder="Nearby Colleges"
        value={property.nearbyColleges}
        onChange={handleChange}
        />

        <button type="submit">Add Property</button>
        </form>
    );
}

export default PropertyForm;