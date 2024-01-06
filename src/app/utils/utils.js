export const smoothScroll = elementId => {
  const element = document.getElementById(`${elementId}`)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 110,
      behavior: 'smooth',
    })
  }
}
