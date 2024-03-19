import Link from "next/link";
import styles from "../page.module.css";
import DetailCard from "@/components/DetailCard/DetailCard";

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

export default async function Page({params}) {
    const data = await getData()

    return (
        <main className={styles.detailContainer}>
            <DetailCard data={data[params.id]}/>
            <Link href="/" className={styles.link}>Back</Link>
        </main>
    )
}