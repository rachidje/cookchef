const RECIPE_API_URL = 'https://restapi.fr/api/cookchef_rachid'

export async function getRecipes(queryParam) {
    const response = await fetch(`${RECIPE_API_URL}${ queryParam ? `?${ queryParam}` : ''}`)
    if(response.ok) {
        const body = await response.json();
        return Array.isArray(body) ? body : [body]
    } else {
        throw new Error("Error fetch recipes");
    }
}

export async function getRecipe() {

}

export async function deleteRecipe(_id) {

}

export async function updateRecipe(updatedRecipe) {

}

export async function createRecipe(newRecipe) {

}