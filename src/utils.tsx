export const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}));

export const shuffle = (array:string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
