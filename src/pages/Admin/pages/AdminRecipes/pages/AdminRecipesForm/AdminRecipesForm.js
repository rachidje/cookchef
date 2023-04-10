import styles from "./AdminRecipesForm.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe as createRecipeApi, updateRecipe as updateRecipeApi } from "../../../../../../apis";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function AdminRecipesForm() {

  const recipe = useLoaderData();
  const navigate = useNavigate();

  const defaultValues = {
    title: recipe ? recipe.title : "",
    image: recipe ? recipe.image : "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre de la recette doit etre renseigne")
      .min(10, "Le titre doit etre explicite")
      .max(30, "Le titre doit etre succinct"),
    image: yup
      .string()
      .required("Il faut renseigner une image")
      .url("L'image doit etre une url valide"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({ defaultValues, resolver: yupResolver(recipeSchema) });

  async function submit(values) {
    try {
      clearErrors();
      if(recipe) {
        await updateRecipeApi({...values, _id: recipe._id});
      } else {
        await createRecipeApi(values);
      }
      navigate('/admin/recipes/list');
    } catch (error) {
      setError("generic", {
        type: "generic",
        message: "Il y a une erreur au niveau de l'API",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
    >
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label>Titre de la recette</label>
        <input {...register("title")} type="text" />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Image pour la recette</label>
        <input {...register("image")} type="text" />
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}
