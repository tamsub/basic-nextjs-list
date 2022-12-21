import Head from "next/head";
import Link from "next/link";
import Styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return {
		props: { ninjas: data },
	};
};

const Ninja = ({ ninjas }) => {
	console.log("ninjas", ninjas);
	return (
		<div>
			<Head>
				<title>Ninja List</title>
			</Head>
			<h1>All Ninja</h1>
			{ninjas.map((ninja) => {
				return (
					<Link
						href={`/ninjas/${ninja.id}`}
						key={ninja.id}
						className={Styles.single}
					>
						<h3>{ninja.name}</h3>
					</Link>
				);
			})}
		</div>
	);
};

export default Ninja;
