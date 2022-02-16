import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react';

export default function Home(props) {

  const [state, setState] = useState(false)

  useEffect(() => {
    newWord()
  }, [])

  const newWord = () => {
    fetch('/api/vocapi')
      .then(response => response.json())
      .then(data => setState(data))
  }

  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Le Blog</title>
      </Head>
      <div className={styles.container} style={{ textAlign: "center" }}>
        <h1>Vocabulaire de base</h1>
        <table className={styles.tableau}>
          <tbody>

            {props.array.map(el => {
              return (
                <tr key={uuidv4()}>
                  <td>{el.en}</td>
                  <td>{el.fr}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1 className='pt-5 px-4'>Mot au hasard</h1>

        <button onClick={newWord} className='btn btn-primary d-block m-auto'>Mot aléatoire </button>
        <h2>{randomWord}</h2>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const data = await import(`/data/vocabulary.json`)
  const array = data.vocabulary

  if (array.length === 0) {
    return {
      redirect: {
        destination: "/isr"
      }
    }
  }

  /*   if(array.length === 0) {
      return {
        notFound : true
      }
    } */

  return {
    props: {
      array: array
    }
  }
}
