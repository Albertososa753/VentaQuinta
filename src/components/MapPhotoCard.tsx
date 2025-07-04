import React, { useState } from "react";

const MapCard = () => {
  const latitude = "-33.378139"; // 33°22'41.3"S
  const longitude = "-60.285222"; // 60°17'06.8"W
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="map-card" style={{ position: "relative", width: "100%", height: "500px" }}>
      {isLoading && (
        <div className="map-skeleton" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#e2e8f0",
          animation: "pulse 1.5s infinite"
        }} />
      )}
      <iframe
        width="100%"
        height="500px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?&q=${latitude},${longitude}&output=embed`}
        onLoad={() => setIsLoading(false)}
      ></iframe>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default MapCard;