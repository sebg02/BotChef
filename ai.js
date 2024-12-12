import { HfInference } from "@huggingface/inference";

const API_URL = "https://botchefapi.onrender.com/api-token";
//const API_URL =  "http://localhost:3000/api-token";

const SYSTEM_PROMPT =
  "Eres un asistente que recibe una lista de ingredientes, debes generar una receta con estos, no es obligatorio que utilices todos los ingredientes pero si debes incluir por lo menos uno de estos, puedes agregar ingredientes que combinen con los que te son dados pero nada muy complicado de obtener, Debes estructurar tu respuesta con el título del Plato, lista de ingredientes y paso a paso. Utiliza el formato markdown para tu respuesta ";

let hf;

async function initializeHf() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error, no se puede conectar al servidor");
    }
    const data = await response.json();
    hf = new HfInference(data.token);
  } catch (err) {
    throw err;
  }
}

export async function generateRecipeHF(ingredientsArray) {
  try {
    if (!hf) {
      await initializeHf();
    }
    let ingredientsString = ingredientsArray.join(", ");
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Tengo ${ingredientsString}, por favor dame una receta con estos ingredientes`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err);
    throw new Error("No se pudo generar la receta, intenta más tarde.");
  }
}
