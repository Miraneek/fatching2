import Card from "@/components/Card";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {
    const data = await getData()

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>(
                Countries
            </h1>
            <div className={styles.flex}>
                {
                    data.map((data, index) =>
                        <Link href={"/" + index}>
                            <Card data={data}/>
                        </Link>
                    )
                }
            </div>
        </main>
    );
}
