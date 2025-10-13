function PropertyCard({ property }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-type">{property.type}</div>
        <div className="property-price">{formatPrice(property.price)}</div>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-address">{property.address}</p>
        
        <div className="property-features">
          <div className="feature">
            <span className="icon">🛏️</span>
            <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="feature">
            <span className="icon">🚿</span>
            <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
          </div>
          <div className="feature">
            <span className="icon">📏</span>
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <div className="property-description">
          {property.description}
        </div>
        
        <div className="property-footer">
          <button className="contact-btn">Contact Agent</button>
          <button className="favorite-btn">❤️</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard