/**
 * Quick util to easily combine classNames.
 * Filters out undefined/null so can do conditional classes by doing `ifCondition && className`
 * Intentionally named for brevity
 * @param classArray
 */
export const classes = (...classArray: (string | undefined | null)[]) => {
  return classArray
    .filter((classString) => classString !== undefined || classString !== null)
    .join(" ");
};
