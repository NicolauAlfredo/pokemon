import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projecto</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga ducimus doloremque minima nesciunt quaerat perspiciatis aliquid et adipisci! Neque fugit soluta eaque omnis expedita ex quasi, suscipit magnam fuga?</p>
            <Image 
                src="/images/charizard.png" 
                width="300" 
                height="300" 
                alt="Pokémon" 
            />
        </div>
    )
}