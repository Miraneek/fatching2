import styles from "./detail.module.css"

export default function DetailCard({data}){

    return (
        <div className={styles.card}>
            <h2>{data.name.common}</h2>
            <table>
                <tbody>
                <tr>
                    <td>Official Name</td>
                    <td>{data.name.official}</td>
                </tr>
                <tr>
                    <td>Native Name</td>
                    <td>{data.name.common}</td>
                </tr>
                <tr>
                    <td>Top Level Domain</td>
                    <td>{data.tld[0]}</td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>{data.region}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{data.status}</td>
                </tr>
                <tr>
                    <td>Independent</td>
                    <td>{data.independent ? "✅" : "❌"}</td>
                </tr>
                <tr>
                    <td>Capital</td>
                    <td>{data.capital[0]}</td>
                </tr>
                <tr>
                    <td>Subregion</td>
                    <td>{data.subregion}</td>
                </tr>
                <tr>
                    <td>UN Member</td>
                    <td>{data.unMember ? "✅" : "❌"}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}