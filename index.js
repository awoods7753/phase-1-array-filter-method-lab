const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, name) {
    let names = drivers.filter( obj => obj.toLowerCase() === name.toLowerCase())
    return names;
}

function fuzzyMatch (drivers, firsttwoletters) {
    let strings = drivers.filter ( obj => obj.slice(0,2) === firsttwoletters.slice(0,2));
    if (strings) {
    return strings;
    }
}

function matchName (drivers, x) {
    let property = drivers.filter (obj => obj.name === x)
        if (property) {
        return property;
        }
    }
