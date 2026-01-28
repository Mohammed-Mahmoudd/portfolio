'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

export default function Map({ center = [30.0444, 31.2357], zoom = 13, dragging = true }) {
  const [mounted, setMounted] = useState(false)
  const [customIcon, setCustomIcon] = useState(null)

  useEffect(() => {
    (async () => {
      const L = (await import('leaflet')).default
      
      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
      
      setCustomIcon(icon)
      setMounted(true)
    })()
  }, [])

  if (!mounted || !customIcon) return <div className="w-full h-full bg-zinc-900 animate-pulse" />

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ width: '100%', height: '100%' }}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      dragging={dragging}
      keyboard={false}
    >
      {/* Dark Matter Tiles - Free, Dark, Beautiful */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={center} icon={customIcon}>
        <Popup className="custom-popup">
          Base of Operations<br />Cairo, Egypt
        </Popup>
      </Marker>
    </MapContainer>
  )
}
