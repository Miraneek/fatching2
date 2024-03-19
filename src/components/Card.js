import styles from "./card.module.css"

export default function Card({data}) {
    return (
        <div className={styles.card}>
            <h1>{data.name.common}</h1>
            <h2>{data.name.official}</h2>
            <p>Population: {data.population}</p>
            <p>Region: {data.region}</p>
            <p>Capital: {data.capital}</p>
        </div>
    )
}