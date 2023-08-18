import Head from 'next/head';
import axios from 'axios';

export default function Home({ meals, category }) {
	//idMeal
	//strMeal
	//strMealThumb
	console.log(category);
	console.log(meals);
	return (
		<>
			<Head>
				<title>Next Recipe</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</>
	);
}

export async function getStaticProps() {
	const list = [];
	const { data: obj } = await axios.get('/categories.php');
	const items = obj.categories;
	items.forEach((el) => list.push(el.strCategory));
	const newList = list.filter((el) => el !== 'Goat' && el !== 'Vegan' && el !== 'Starter');

	const randomNum = Math.floor(Math.random() * newList.length);

	const { data } = await axios.get(`/filter.php?c=${newList[randomNum]}`);

	return {
		props: { ...data, category: newList[randomNum] },
		revalidate: 10,
	};
}
