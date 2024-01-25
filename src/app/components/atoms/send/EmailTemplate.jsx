// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
export const EmailTemplate = ({
  name,
  email,
  companyName,
  services,
  message,
}) => (
  <div>
    <h1>
      {`I'm`} {name}
    </h1>
    <p>My email is {email}</p>
    <p>My company name is {companyName}</p>
    <p>{`I'm interested in`} {services.join(', ')}</p>
    <p>My message is {message}</p>
  </div>
)
EmailTemplate.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  companyName: propTypes.string,
  services: propTypes.array,
  message: propTypes.string,
}
