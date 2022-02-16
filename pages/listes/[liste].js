import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {v4 as uuidv4} from 'uuid'

export default function ListePerso(props) {

  const router = useRouter()
  console.log(props);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.liste}</title>
      </Head>
      <div className='container px-4 pt-5'>
      <h1 className='text-center'>Vocabulaire</h1>
        <h2 className='text-center'>{router.query.liste.charAt(0).toUpperCase() + router.query.liste.slice(1)}</h2>
        <table className={styles.tableau}>
          <tbody>

            {props.listeEnCours.map(el => {
              return (
                <tr key={uuidv4()}>
                  <td>{el.en}</td>
                  <td>{el.fr}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}


export async function getStaticProps(context) {

  const slug = context.params.liste;
  const data = await import('/data/lists.json');

  const listeEnCours = data.englishList.find(list => list.name === slug)

  return {
    props: {
      listeEnCours: listeEnCours.data,
    }
  }
}

export async function getStaticPaths() {

  const data = await import(`/data/lists.json`);

  const paths = data.englishList.map(item => ({
    params: { liste: item.name }
  }))

  return {
    /*     paths: [
          { params: { liste: "words" } }
        ], */
    paths,
    fallback: false
  }
}