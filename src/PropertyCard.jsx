import { FaBookmark } from "react-icons/fa";
import placeholder from "./Assets/Images/placeholder.png";

function PropertyCard(props) {
  const { property, savedProperties, setSavedProperties } = props;

  const handleBookmarkState = (e) => {
    if (savedProperties.includes(property.property_id)) {
      setSavedProperties(
        savedProperties.filter(
          (properties) => properties !== property.property_id
        )
      );
    } else {
      setSavedProperties((savedProperties) => [
        ...savedProperties,
        property.property_id,
      ]);
    }
  };

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        {property.photos[0] !== "null" && !!property.photos[0] ? (
          <img
            src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
            alt={property.display_address}
          />
        ) : (
          <img src={placeholder} alt="House Placeholder" />
        )}

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
        >
          <FaBookmark
            onClick={handleBookmarkState}
            className={`${
              savedProperties.includes(property.property_id)
                ? "text-red-400"
                : "text-yellow-400"
            }`}
            size="40"
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
