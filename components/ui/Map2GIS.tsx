'use client'
import { useEffect, useRef } from 'react'

interface Map2GISProps {
  lat?: number
  lon?: number
  zoom?: number
  height?: string
}

const MAP_CONTAINER_ID = 'grandpro-2gis-map'
const SCRIPT_ID = '2gis-api'

export function Map2GIS({
  lat = 43.218616,
  lon = 76.920283,
  zoom = 16,
  height = '340px',
}: Map2GISProps) {
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (mapRef.current) return

    const init = () => {
      const DG = (window as any).DG
      if (!DG) return

      DG.then(function () {
        // Re-read DG inside callback — after .then() resolves, the full API is available
        const dg = (window as any).DG
        if (!dg || mapRef.current) return

        const container = document.getElementById(MAP_CONTAINER_ID)
        if (!container) return

        const map = dg.map(MAP_CONTAINER_ID, {
          center: [lat, lon],
          zoom,
          fullscreenControl: false,
        })
        mapRef.current = map

        dg.marker([lat, lon])
          .addTo(map)
          .bindPopup(
            '<div style="font-family:Arial,sans-serif;padding:4px 2px">' +
            '<b style="font-size:13px;color:#0284C7">GrandPro Moving</b><br>' +
            '<span style="font-size:12px;color:#475569">пр. Аль-Фараби, 77/7<br>БЦ Esentai Tower, Алматы</span>' +
            '</div>'
          )
          .openPopup()
      })
    }

    if ((window as any).DG) {
      init()
    } else if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full'
      script.onload = init
      document.head.appendChild(script)
    } else {
      const poll = setInterval(() => {
        if ((window as any).DG) { clearInterval(poll); init() }
      }, 150)
      return () => clearInterval(poll)
    }

    return () => {
      if (mapRef.current) {
        try { (mapRef.current as any).remove() } catch {}
        mapRef.current = null
      }
    }
  }, [lat, lon, zoom])

  return (
    <div
      id={MAP_CONTAINER_ID}
      style={{
        width: '100%',
        height,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
      }}
    />
  )
}
