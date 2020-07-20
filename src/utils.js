
export const strIngredient = (item) => {
    let ingredientes = '';
    for (let i = 0; i <= 14; i++) {
        const ing = item[`strIngredient${i}`];
        const cant = item[`strMeasure${i}`];
        if (ing) {
            ingredientes += `${ing} ${cant},`
        }
    }
    return ingredientes;
}