//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

touristSpots = touristSpots.map(removeArticles).sort();

const ulElement = document.createElement('ul');
ulElement.id = 'band';


for (const spot of touristSpots) {
  const liElement = document.createElement('li');
  liElement.textContent = spot;
  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);

