function joinArray(array: number[], sep: string = '-'): string {
    let newString: string = '';
    array.forEach((element: number, index: number) => {
        if (index == array.length - 1) {
            newString += String(element)
            return newString
        }
        newString += String(element) + sep;
    });
    return newString
}


const elements = [2, 4, 5, 6, 7, 8];

console.log(joinArray(elements))