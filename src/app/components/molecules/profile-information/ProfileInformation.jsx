import { TOOLS_AND_TECHNOLOGIES, SOFTWARE } from '@/utils/constants'
import styles from './ProfileInformation.module.css'
import { Sector } from './Sector'
import { Item } from './Item'
import { ItemContact } from './ItemContact'

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
        <ItemContact>Eduardo Rodríguez</ItemContact>
        <ItemContact>
          <ItemContact.IsALink>me@redu.com</ItemContact.IsALink>
        </ItemContact>
        <ItemContact>Maracay / Venezuela 🇻🇪</ItemContact>
      </Sector>
    </div>
  )
}
