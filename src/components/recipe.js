import React from "react";

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id="baked-salmon">
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredients, i) => (
                    <li key={i}>{ingredients.name}</li>
                ))}
            </ul>
        </section>
    );
}