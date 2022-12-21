import { ROUTES_MANIFEST } from "next/dist/shared/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();
	console.log("router", router);
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);
	return (
		<div className='not-found'>
			<h1>Oops...</h1>
			<h2>The page could not be fournd</h2>
			<Link href='/'>
				<p>Go back to home page</p>
			</Link>
		</div>
	);
};

export default NotFound;
