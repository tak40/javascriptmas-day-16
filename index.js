/** @format */

const niceList = document.getElementById('nice-list')
const naughtyList = document.getElementById('naughty-list')
const btn = document.getElementById('btn')

const sorteesArr = [
    {
        name: 'David',
        hasBeenGood: false,
    },
    {
        name: 'Del',
        hasBeenGood: true,
    },
    {
        name: 'Valerie',
        hasBeenGood: false,
    },
    {
        name: 'Astrid',
        hasBeenGood: true,
    },
]

btn.addEventListener('click', sortPeople)

function sortPeople() {
    const nicePeople = sorteesArr.filter(person => person.hasBeenGood)
    const naughtyPeople = sorteesArr.filter(person => !person.hasBeenGood)

    updateList(niceList, nicePeople)
    updateList(naughtyList, naughtyPeople)
}

function updateList(listElement, people) {
    listElement.innerHTML = '' 
    people.forEach(person => {
        const listItem = document.createElement('li')
        listItem.textContent = person.name
        listElement.appendChild(listItem)
    })
}


/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
