import { MapComponent } from '@components/MapComponent'

export default function Home() {
  return (
    <MapComponent style={{ width: "100%", height: "500px" }} latitude={41.8373} longitude={-87.6861} />
  )
}
