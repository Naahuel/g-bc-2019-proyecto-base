import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={routes.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={routes.RECIPES}>Recipes</Link>
                </li>
            </ul>
        </nav>
    )
}