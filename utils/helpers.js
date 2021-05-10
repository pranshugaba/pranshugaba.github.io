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

/**
 * computes reading time of article (in minutes)
 */
export function readingTime(content) {
  let minutes = 0;
  const contentString = JSON.stringify(content);
  const words = contentString.split(" ").length;
  const wordsPerMinute = 200;
  minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 *
 * @returns a subset of allAuthors
 */
export function filterAuthors(allAuthors, authorSlugs) {
  const postAuthors = allAuthors.filter(post =>
    authorSlugs.includes(post.slug)
  );
  return postAuthors;
}
