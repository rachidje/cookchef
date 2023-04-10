import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import { getRecipe } from "./apis";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AdminUsers = lazy(() => import("./pages/Admin/pages/AdminUsers/AdminUsers"))
const AdminRecipes = lazy(() => import("./pages/Admin/pages/AdminRecipes/AdminRecipes"))
const AdminRecipesForm = lazy(() => import("./pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm"))
const AdminRecipesList = lazy(() => import("./pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList"))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        path: 'recipes',
                        element: <AdminRecipes />,
                        children: [
                            {
                                index: true,
                                loader: async () => redirect('list')
                            },
                            {
                                path: 'list',
                                element: <AdminRecipesList />
                            },
                            {
                                path: 'new',
                                element: <AdminRecipesForm />
                            },
                            {
                                path: 'edit/:recipeId',
                                loader: async ({ params : { recipeId } }) => getRecipe(recipeId),
                                element: <AdminRecipesForm />
                            }
                        ]
                    },
                    {
                        path: 'users',
                        element: <AdminUsers />
                    }, 
                    {
                        index: true,
                        loader: async () => redirect('recipes')
                    }
                ]
            }
        ]
    }
]);