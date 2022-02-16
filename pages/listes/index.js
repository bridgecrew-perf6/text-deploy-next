import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';
import {v4 as uuidv4} from 'uuid'

export default function Listes(props) {

    console.log(props)
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Listes</title>
            </Head>
            <div className={styles.container} style={{ textAlign: "center" }}>
                <h1>Listes</h1>
                <div className='container container'>
                    <ul className="list-group">
                        {props.lists.map(item => {
                            return (
                               /*  <Link href={Object.keys(item)[0]}> */
                               <Link key={uuidv4()} href={`listes/${item.name}`}>
                                <li key={uuidv4()} className="list-group-item">
                                    <a>{item.name}</a>
                                </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const data = await import(`/data/lists.json`)
    const lists = data.englishList

    if (lists.length === 0) {
        return {
            redirect: {
                destination: "/isr"
            }
        }
    }

    return {
        props: {
            lists: lists
        }
    }
}
