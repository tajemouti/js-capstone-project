const commentCounter = (comments) => {
  if (comments === null || comments === undefined) return 0;
  return comments.length;
};

export default commentCounter;
