import { API_KEY, firstLetterUpperCase } from "../../../../Redux/store/constans";

export async function downloadProductData(product) {
  const query = product.eng;
  const settings = {
    method: 'GET',
    headers: {
      'X-Api-Key' : API_KEY,
    }
  }
  const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, settings);
  const data = await response.json();

  if (data.items.length) {
    const {calories, cholesterol_mg, fat_total_g, fiber_g, potassium_mg, protein_g, sodium_mg, sugar_g, name} = data.items[0];
    return {
      id: product.id,
      pol: firstLetterUpperCase(product.pol),
      eng: firstLetterUpperCase(name),
      calories: calories,
      cholesterol: cholesterol_mg,
      fat: fat_total_g,
      fiber: fiber_g,
      potassium: potassium_mg,
      protein: protein_g,
      sodium: sodium_mg,
      sugar: sugar_g
    }
  } else {
    throw new Error('Download product error. Product not found!');
  }
}