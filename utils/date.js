const defaultOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
};

export function formatDate(date, options = defaultOptions) {
  return new Date(date).toLocaleDateString("en", options);
}
