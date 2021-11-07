function Card(id, name, image, description, techs, path) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.description = description;
  this.techs = techs;
  this.path = path;
}

const card1 = new Card(1, 'Movie Library CRUD', 'https://i.imgur.com/lUPwwMo.png', 'Um CRUD de cartões de filmes.', 'Um CRUD de cartões de filmes.', [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-plain.svg',
  },
],
'https://raikouve.github.io/portfolio/');

const data = [];
data.push(card1);
console.log(data);
