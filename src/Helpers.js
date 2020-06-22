export function capitalize(word){
    if(!word || word === "") return;
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
}