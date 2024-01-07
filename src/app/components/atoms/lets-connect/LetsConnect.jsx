import propTypes from 'prop-types'
import Link from 'next/link'

export const LetsConnect = ({
  fontSize = '--f-s-xxl',
  margin,
  lineHeight = '1.2',
  color = '--c-whywhite-300',
  textAlign = 'left',
}) => {
  return (
    <Link
      href="/contact"
      style={{
        fontSize: `var(${fontSize})`,
        margin: `${margin}`,
        lineHeight: `${lineHeight}`,
        textDecoration: 'none',
        color: `var(${color})`,
        textAlign: `${textAlign}`,
      }}
    >
      <span>{`Let's Connect`}</span>
    </Link>
  )
}

LetsConnect.propTypes = {
  fontSize: propTypes.string,
  margin: propTypes.string,
  lineHeight: propTypes.string,
  color: propTypes.string,
  textAlign: propTypes.string,
}
