export default function setFromArray(arr) {
  const mySet = new Set();

  for (const item of arr) {
    mySet.add(item);
  }
  return mySet;
}
