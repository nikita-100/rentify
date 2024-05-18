import React,{useState} from "react";
import PropertyList from './PropertyList';

function BuyerDashboard(){
    const[properties,setPoperties] = useState([
        {id:1,place:'Delhi',area:'1000 sq ft',bedrooms:2,bathrooms:1,nearbyHospitals:'Hospital ABC',nearbyColleges:'College ABC'},
        {id:2,place:'Kerala',area:'2000 sq ft',bedrooms:4,bathrooms:2,nearbyHospitals:'Hospital AIIMS',nearbyColleges:'College UKG'},

    ]);
    const [filters,setFilters] = useState({
        place:'',
        minArea:'',
        maxArea:'',
        minBedrooms:'',
        maxBedrooms:'',
        minBathrooms:'',
        maxBathrooms:'',
    });

    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 2;


    const handleChange = (e) => {
        const {name,value} = e.target;
        setFilters({...filters,[name]:value});
    };


    const applyFilters = (criteria) => {
        const filteredProperties = properties.filter((property) => {
            const area = parseInt(property.area.split(' ')[0],10);
            const minArea = filters.minArea ? parseInt(filters.minArea,10) : 0;
            const maxArea = filters.maxArea ? parseInt(filters.maxArea,10) : Infinity;
            const minBedrooms = filters.minBedrooms ? parseInt(filters.minBedrooms,10) : 0;
            const maxBedrooms = filters.maxBedrooms ? parseInt(filters.maxBedrooms,10) : Infinity;
            const minBathrooms = filters.minBathrooms ? parseInt(filters.minBathrooms,10) : 0;
            const maxBathrooms = filters.maxBathrooms ? parseInt(filters.maxBathrooms,10) : Infinity;






            return(
                (filters.place === '' || property.place.toLowerCase().includes(filters.place.toLowerCase())) &&
                area >= minArea &&
                area <= maxArea &&
                property.bedrooms >= minBedrooms &&
                property.bedrooms <= maxBedrooms &&
                property.bathrooms >= minBathrooms && 
                property.bathrooms <= maxBathrooms
            );
        });
        setPoperties(filteredProperties);
    };
     return(
        <div>
            <h2>Buyyer Dashboard</h2>

            <div>
                <input
                type="text"
                name="place"
                placeholder="Place"
                value={filters.place}
                onChange={handleChange}
                />
                <input
                type="number"
                name="minArea"
                placeholder="Min Area (sq ft)"
                value={filters.minArea}
                onChange={handleChange}
                />
                 <input
                type="number"
                name="maxArea"
                placeholder="Max Area (sq ft)"
                value={filters.maxArea}
                onChange={handleChange}
                />
                 <input
                type="number"
                name="minBedrooms"
                placeholder="Min Bedrooms"
                value={filters.minBedrooms}
                onChange={handleChange}
                />
                <input
                type="number"
                name="maxBedrooms"
                placeholder="Max Bedrooms"
                value={filters.maxBedrooms}
                onChange={handleChange}
                />
            <button onClick={applyFilters}>Apply Filters</button>
            </div>
            <PropertyList properties={properties} />
        </div>
    ); 
}
 export default BuyerDashboard;