import Map from './Components/Map';
import LocationMarker from './Components/LocationMarker';
import Loader from './Components/Loader';
import Header from './Components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header/>
      { !loading ? <Map eventData={eventData} /> : <Loader /> }

    </div>
  );
}

export default App;
