export const sortArraysBySameValues = (
  arr1: number[],
  arr2: number[]
): [number[], number[]] => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const sortedArr1: number[] = new Array(maxLength).fill(0);
  const sortedArr2: number[] = new Array(maxLength).fill(0);

  const commonValues = arr1.filter((val) => arr2.includes(val));
  commonValues.sort((a, b) => a - b);

  const uniqueArr1 = arr1
    .filter((val) => !arr2.includes(val))
    .sort((a, b) => a - b);
  const uniqueArr2 = arr2
    .filter((val) => !arr1.includes(val))
    .sort((a, b) => a - b);

  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < maxLength; i++) {
    if (commonValues.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const commonVal = commonValues.shift()!;
      sortedArr1[i] = commonVal;
      sortedArr2[i] = commonVal;
    } else {
      if (uniqueArr1[idx1] !== undefined) {
        sortedArr1[i] = uniqueArr1[idx1++];
      }
      if (uniqueArr2[idx2] !== undefined) {
        sortedArr2[i] = uniqueArr2[idx2++];
      }
    }
  }

  return [sortedArr1, sortedArr2];
};
