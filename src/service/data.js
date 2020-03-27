import escola from '../images/escola.jpg'
import familia from '../images/familia.jpeg'
import formacoes from '../images/formacoes.jpg'

export const cards = [
  {
    title: 'Educação Católica',
    description: 'Adaptamos os melhores métodos pedagógicos para que o processo educacional seja um verdadeiro caminho de intimidade com Nosso Senhor Jesus Cristo.',
    img: escola
  },
  {
    title: 'Formações',
    description: 'Aprenda princípios e práticas educacionais que formaram grandes mestres da sabedoria e da espiritualidade.',
    img: formacoes
  },
  {
    title: 'Aconselhamento Familiar',
    description: 'Orientação e aconselhamento para que sua família possa desenvolver plenamente sua vocação como igreja doméstica.',
    img: familia
  },
]

export const portfolio = [
  {
    id: 0,
    img_path: 'img/portfolio/fullsize/1.jpg',
  },
  {
    id: 1,
    img_path: 'img/portfolio/fullsize/2.jpg',
  },
  {
    id: 2,
    img_path: 'img/portfolio/fullsize/3.jpg',
  },
  {
    id: 3,
    img_path: 'img/portfolio/fullsize/4.jpg',
  },
  {
    id: 4,
    img_path: 'img/portfolio/fullsize/5.jpg',
  },
  {
    id: 5,
    img_path: 'img/portfolio/fullsize/6.jpg',
  },
]

export const contatos = [
  {
    icon: 'fab fa-whatsapp',
    text: '(11) 95342-8533',
    link: `https://api.whatsapp.com/send?phone=5511953428533`
  },
  {
    icon: 'far fa-envelope',
    text: 'escolacasadafelicidade@gmail.com',
    link: 'mailto:escolacasadafelicidade@gmail.com'
  },
  {
    icon: 'fab fa-instagram',
    text: '@institutocasadafelicidade',
    link: 'https://www.instagram.com/institutocasadafelicidade/'
  },
  {
    icon: 'fab fa-facebook',
    text: 'institutocasadafelicidade',
    link: 'https://www.facebook.com/institutocasadafelicidade/'
  }
]