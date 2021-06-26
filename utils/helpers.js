import { stringify } from "postcss";

const defaultOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
};

/**
 * Formats the date
 */
export function formatDate(date, options = defaultOptions) {
  const currentDate = new Date();
  return new Date(date).toLocaleDateString("en", options);
}

/**
 * If the year is current, then it is not shown
 */
export function formatDateHideCurrentYear(date) {
  const inputDate = new Date(date);
  const currentDate = new Date();
  let options;
  if (inputDate.getFullYear() < currentDate.getFullYear()) {
    options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };
  } else {
    options = {
      month: "short",
      day: "numeric"
    };
  }
  return inputDate.toLocaleDateString("en", options);
}

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

/** reads the build date from the env variable */
export function getBuildDate() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return formatDate(process.env.NUXT_ENV_BUILD_TIME, options);
}

const puzzleRoutes = ["puzzles"];
const poemRoutes = ["poems"];
const articleRoutes = ["articles"];

/** returns category from route */
export function getCategoryFromRoute(route) {
  const activeCategory = route.slice(1).split("/");
  return activeCategory[0] ? activeCategory[0] : "root";
}

export function getThemeFromCategory(category) {
  if (puzzleRoutes.includes(category)) {
    return "theme-puzzle";
  } else if (poemRoutes.includes(category)) {
    return "theme-poem";
  } else if (articleRoutes.includes(category)) {
    return "theme-article";
  } else {
    return "";
  }
}

export function trimString(str, len = 50) {
  if (str.length > len) {
    return str.substring(0, len - 3) + "…";
  } else {
    return str;
  }
}
