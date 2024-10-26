export function camelCaseToTwoLetters(input: string): string {
    return input
        .replace(/([a-z])([A-Z])/g, '$1 $2') 
        .replace(/^./, str => str.toUpperCase()); 
}

