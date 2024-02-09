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
        <ItemContact>Eduardo R.</ItemContact>
        <ItemContact>
          <ItemContact.IsALink href="mailto:ejrb1234@gmail.com?subject=Hi there, from your portfolio.&body=I’m interested in…">
            me@redu.com
          </ItemContact.IsALink>
        </ItemContact>
        <ItemContact>Maracay / Venezuela 🇻🇪</ItemContact>
      </Sector>
    </div>
  )
}
