"use client"

import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import styles from './ShoppingCart.module.sass'

export const ShoppingCart = () =>{

    const [countItems, setCountItems] = useState(0)

    return (
        <button className={styles.ShoppingCart}>
            <FaShoppingCart/>
        </button>
    )
}