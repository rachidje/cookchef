import { Outlet } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";
import { Suspense } from "react";

export default function AdminRecipes() {
    return (
        <div className="d-flex flex-fill flex-column p-20">
            <h4 className="mb-20">Gestion des recettes</h4>
            <div className="flex-fill d-flex flex-column">
                <AdminRecipesNav />
                <div className="flex-fill d-flex flex-column">
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}