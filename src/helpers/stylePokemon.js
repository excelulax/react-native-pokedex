const typesColors = {
  bug: '#3DF254', 
  dark: 'dark',
  dragon: 'purple',
  electric: '#E5E04A',
  fairy: 'pink',
  fighting: '#DDA561',
  fire: '#E84E4E', 
  flying: 'indigo',
  ground: '#B37C4F',
  ghost: 'violet',
  grass: '#1B972A',
  ice: 'lightBlue',
  normal: '#FBC45C',
  poison: 'violet',
  psychic: 'pink',
  rock: '#84996C',
  shadow: 'dark',
  steel: 'trueGray',
  unknown: 'gray',
  water: '#4EABE8',
};
  
  // Genera un color rependiendo al tipo de pokemon
const getTypeColor = (type) => {
    return typesColors[type] || 'light';
};
  
  // Formatea el número con 3 digitos
const formatNumber = (num) => {
    return num.toString().padStart(3, '0');
};

export { typesColors, getTypeColor, formatNumber }