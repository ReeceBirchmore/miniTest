import { useState, useEffect } from "react";
import Header from "./Header";
import PropertyCard from "./PropertyCard";

function App() {
  const [properties, setProperties] = useState(); // Keep track of the properties
  const [filterWord, setFilterWord] = useState(""); // Keep track of the filter term
  const [savedProperties, setSavedProperties] = useState([]); // Keep track of saved properties

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch("/property-data.json");
      const json = await response.json();
      setProperties(json.result.properties.elements);
    };
    fetchPropertyData();
  }, []);

  return (
    <div className="container mx-auto my-5">
      <Header setFilterWord={setFilterWord} />
      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties &&
          properties.map(
            (property) =>
              property.short_description.includes(filterWord) && (
                <PropertyCard
                  key={property.property_id}
                  property={property}
                  savedProperties={savedProperties}
                  setSavedProperties={setSavedProperties}
                />
              )
          )}
      </div>
    </div>
  );
}

export default App;
