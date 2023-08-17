import Head from 'next/head';
import styles from './Home.module.scss';
import clsx from 'clsx';
import axios from 'axios';
import Title from '@/components/atoms/text/Title';

export default function Home({ meals }) {
	//idMeal
	//strMeal
	//strMealThumb
	console.log(meals);
	return (
		<>
			<Head>
				<title>Next Recipe</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={clsx(styles.main)}>
				{/* <Title
					url={'/abc'}
					className={styles.txt}			
					type={'logo'}
				>
					Hello
				</Title>

				<Title type={'slogan'} tag={'h2'}>
					Slogan
				</Title> */}
				<Title tag={'h3'} url={'/abc'} type={'slogan'} style={{ color: 'aqua', hoverColor: 'hotpink' }}>
					Hello
				</Title>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/filter.php?c=Seafood');
	console.log('data fetching on Server', data);

	return {
		props: data,
		revalidate: 60 * 60 * 24,
	};
}
