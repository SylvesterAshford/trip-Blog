import React, {useState } from 'react'
import useFetch from '../../hooks/useFetch';
import './index.css';
export default function Index() {

    
    let [url, setUrl] = useState('http://localhost:8000/trips')

    let {data : trips, loading, error} = useFetch(url, {type:"GET"});

    // USING WITH USECALLBACK HOOK
    //let [trips, setTrips] = useState([]);

    // let fetchTrips = useCallback(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         setTrips(data);

    //     })
    // },[url])

    // useEffect(() => {
    //    fetchTrips()
    // },[fetchTrips])

    

    //ONLY USING USE_EFFECT

    // useEffect(() => {
    //     fetch(url)
    //         .then(res=>  res.json())
    //         .then(data => {
    //             setTrips(data);
    
    //         })
    // },[url])

  return (
    <div className='container'>
        {error && <p>{error}</p>}
        { !error &&
            <div className='flex-container'>
                <h1>Ready to go?</h1>
                {loading && <p>Loading trips</p>}
                <div>
                    <button onClick={() => setUrl('http://localhost:8000/trips')}>all</button>
                    <button onClick={() => setUrl('http://localhost:8000/trips?location=United States')}>Trips in United States</button>
                    <button onClick={() => setUrl('http://localhost:8000/trips?location=Myanmar')}>Trips in Myanmar</button>
                </div>
                <ul className='trips-list'>
                    {trips && trips.map(trip => (
                        <li key={trip.id} className='trip'>
                            <h3>{trip.name}</h3>
                            <p>price - {trip.price}mmk</p>
                        </li>
                    ))}
                </ul>
            </div>
        }
    </div>
  )
}
