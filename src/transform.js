function groupAdultsByAgeRange(people) {
  const a = people.filter(x => x.age >= 18)

  const categorizedPeople = a.reduce((categories, currentValue) => {
    if (currentValue.age >= 18 && currentValue.age <= 20) {
    }
    if (categories['20 and younger'] === undefined) {
      categories['20 and younger'] = [currentValue]
    } else {
      categories['20 and younger'].push(currentValue)
    }

    if (currentValue.age >= 21 && currentValue.age <= 30) {
    }
    if (categories['21-30'] === undefined) {
      categories['21-30'] = [currentValue]
    } else {
      categories['21-30'].push(currentValue)
    }

    if (currentValue.age >= 31 && currentValue.age <= 40) {
    }
    if (categories['31-40'] === undefined) {
      categories['31-40'] = [currentValue]
    } else {
      categories['31-40'].push(currentValue)
    }


    if (currentValue.age >= 41 && currentValue.age <= 50) {
    }
    if (categories['41-50'] === undefined) {
      categories['41-50'] = [currentValue]
    } else {
      categories['41-50'].push(currentValue)
    }

    if (currentValue.age >= 51) {
    }
    if (categories['51 and older'] === undefined) {
      categories['51 and older'] = [currentValue]
    } else {
      categories['51 and older'].push(currentValue)
    }

    return categories
  }, {})
  return categorizedPeople
}


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange