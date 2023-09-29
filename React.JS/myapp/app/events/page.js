"use client"
import React from "react";
import axios from "axios";
const AllEvents = () => {
    const [events, setEvents] = React.useState([]);
    const fetchAllEvents = async () => {
        const response = await axios.get("https://dummyjson.com/products");
        const data = await response.data.products;
        setEvents(data);
    };
    React.useEffect(() => {
        fetchAllEvents();
    }, []);
    return (
        <div>
        <h1>Events</h1>
        {events.map((event) => (
            <div key={event.id} style={{border: '1px solid #e0e0e0', padding: '16px', margin: '16px 0'}}>
                <h2>Product Name: {event.title}</h2>
                <p><strong>Description:</strong> {event.description}</p>
                <img src={event.thumbnail} alt={event.title} style={{width: '100px'}} />
                <p><strong>Price:</strong> ${event.price}</p>
                <p><strong>Rating:</strong> {event.rating}</p>
                <p><strong>Brand:</strong> {event.brand}</p>
                <p><strong>Category:</strong> {event.category}</p>
            </div>
        ))}
    </div>
    );
};

export default AllEvents;