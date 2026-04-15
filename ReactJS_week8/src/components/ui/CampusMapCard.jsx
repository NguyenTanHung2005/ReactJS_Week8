import React, { useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const defaultPosition = [10.8229, 106.6865]

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

function RecenterButton({ center }) {
  const map = useMap()

  return (
    <button
      className="btn btn-chefify btn-sm"
      onClick={() => map.setView(center, 16, { animate: true })}
      type="button"
    >
      Recenter campus
    </button>
  )
}

function ClickHandler({ onSelectPosition }) {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng
      onSelectPosition([Number(lat.toFixed(6)), Number(lng.toFixed(6))])
    },
  })

  return null
}

export default function CampusMapCard() {
  const [selectedPosition, setSelectedPosition] = useState(defaultPosition)

  const directionUrl = useMemo(
    () => `https://www.google.com/maps/dir/?api=1&destination=${defaultPosition[0]},${defaultPosition[1]}`,
    [],
  )

  return (
    <section className="py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: 'var(--chefify-primary)' }}>Chefify Campus Map</h2>
          <p className="text-muted mb-0">Default location: Co so Nguyen Van Bao, Dai hoc Cong nghiep TP.HCM.</p>
        </div>
        <a href={directionUrl} target="_blank" rel="noreferrer" className="btn btn-chefify-outline btn-sm">
          Open directions
        </a>
      </div>

      <div className="card overflow-hidden border-0 shadow-sm">
        <div style={{ height: '360px' }}>
          <MapContainer center={defaultPosition} zoom={16} scrollWheelZoom className="h-100 w-100">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={defaultPosition}>
              <Popup>
                IUH Nguyen Van Bao Campus<br />12 Nguyen Van Bao, Go Vap.
              </Popup>
            </Marker>

            <Marker position={selectedPosition}>
              <Popup>
                Selected position<br />Lat: {selectedPosition[0]}, Lng: {selectedPosition[1]}
              </Popup>
            </Marker>

            <ClickHandler onSelectPosition={setSelectedPosition} />

            <div className="leaflet-top leaflet-right p-2">
              <RecenterButton center={defaultPosition} />
            </div>
          </MapContainer>
        </div>

        <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
          <p className="mb-0 small text-muted">
            Click on map to update selected location. Current: {selectedPosition[0]}, {selectedPosition[1]}
          </p>
          <button className="btn btn-chefify" onClick={() => setSelectedPosition(defaultPosition)} type="button">
            Set default location
          </button>
        </div>
      </div>
    </section>
  )
}
