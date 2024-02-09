export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: '5000',
        inset: 0,
      }}
    >
      <h1>Cargando</h1>
    </div>
  )
}
