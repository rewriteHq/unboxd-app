export const generateCategoriesSelect = (categories: any[]) => {
    let categoriesArray: { value: string; text: string; }[] = [];
    categories.map((cat: any) => categoriesArray.push({value: cat._id, text: cat.name}));
    return categoriesArray;
}