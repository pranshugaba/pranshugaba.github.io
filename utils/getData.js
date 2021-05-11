export function getTagsFrequency(tagsData) {
  // Concatenates the tags arrays of all pages
  const tagsDuplicate = tagsData.reduce((accumulator, currentValue) => {
    return currentValue.hasOwnProperty("tags")
      ? [...accumulator, ...currentValue.tags]
      : [...accumulator];
  }, []);

  // // Change array to object for better syntax
  const map = tagsDuplicate.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  // // sorts tags in descending order of frequency
  const tagsFrequencies = [...map.entries()].sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });
  return tagsFrequencies;
}
