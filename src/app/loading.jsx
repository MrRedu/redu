import styles from './Loading.module.css'
export default function Loading() {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        backgroundColor: 'var(--c-darkgray-800)',
        position: 'absolute',
        zIndex: '5000',
        inset: 0,
      }}
    >
      <div className={styles.loader}>
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
        <div className={styles.box3}></div>
      </div>
    </div>
  )
}
