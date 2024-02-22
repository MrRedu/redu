'use client'
import propTypes from 'prop-types'
import styles from './GridListToggle.module.css'
import { List, LayoutGrid } from 'lucide-react'
export const GridListToggle = ({ isGrid, handleIsGrid, handleIsList }) => {
  return (
    <div className={styles.container}>
      <button
        aria-label="Toggle between grid and list view"
        type="button"
        onClick={handleIsGrid}
        className={`${styles['button-option']} ${styles['grid-button']} ${
          isGrid ? styles['is-active'] : ''
        }`}
      >
        <LayoutGrid
          size={16}
          fill={`${isGrid ? '#ff0000' : 'var(--c-whywhite-300)'} `}
          color={'#00000000'}
        />
        <span className={styles.text}>Grid</span>
      </button>
      <button
        aria-label="Toggle between grid and list view"
        type="button"
        onClick={handleIsList}
        className={`${styles['button-option']} ${styles['list-button']} ${
          !isGrid ? styles['is-active'] : ''
        }`}
      >
        <List
          size={16}
          color={`${isGrid ? 'var(--c-whywhite-300)' : '#ff0000'} `}
        />
        <span className={styles.text}>List</span>
      </button>
    </div>
  )
}
GridListToggle.propTypes = {
  isGrid: propTypes.bool,
  handleIsGrid: propTypes.func,
  handleIsList: propTypes.func,
}
