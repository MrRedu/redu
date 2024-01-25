export const smoothScroll = elementId => {
  const element = document.getElementById(`${elementId}`)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 110,
      behavior: 'smooth',
    })
  }
}

// Validations for forms
export const validateEmailFormat = email => {
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  return EMAIL_REGEX.test(email)
}
