
function main(): void {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const array_filtered = array.filter((item: number) => item % 2 == 0);

    console.log(array_filtered);
}

main()