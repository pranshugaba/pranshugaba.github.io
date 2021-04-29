/**
 * capitalize first letter
 * TODO: Does not work for all locales
 */
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * converts kebab case to Title Case
 */
export function kebabToTitle(str) {
  return str
    .split("-")
    .map(word => capitalizeFirstLetter(word))
    .join(" ");
}

/**
 * converts kebab case to Sentence case
 */
export function kebabToSentence(str) {
  return capitalizeFirstLetter(str)
    .split("-")
    .join(" ");
}
