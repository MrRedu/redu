import { TOOLS_AND_TECHNOLOGIES, SOFTWARE } from '@/libs/constants'
import styles from './ProfileInformation.module.css'
import { Sector } from './Sector'
import { Item } from './Item'

export const ProfileInformation = () => {
  return (
    <div className={styles.container}>
      <Sector title="Tools and technologies" layout={'grid'}>
        {TOOLS_AND_TECHNOLOGIES.map(({ title, icon }) => (
          <Item key={title} title={title} icon={icon} />
        ))}
      </Sector>
      <Sector title="Software" layout={'grid'}>
        {SOFTWARE.map(({ title, icon }) => (
          <Item key={title} title={title} icon={icon} />
        ))}
      </Sector>
      <Sector title="Contact" layout={'flex'}>
        <li>Eduardo Rodríguez</li>
        <li>
          <a href="mailto:X">example@gmail.com</a>
        </li>
        <li>Maracay, Aragua - Venezuela</li>
      </Sector>
    </div>
  )
}
