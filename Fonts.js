const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=DM+Sans:300,400,500,700,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('DM Sans')

  roboto.load().then(() => {
    document.documentElement.classList.add('DMSans')
  })

  const link1 = document.createElement('link')
  link1.href = 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900'
  link1.rel = 'stylesheet'

  document.head.appendChild(link1)

  const poppins = new FontFaceObserver('Poppins')

  poppins.load().then(() => {
    document.documentElement.classList.add('Poppins')
  })
}

export default Fonts