import Head from "next/head"
import { Blog, Campaigns, Header, HowItWorks } from "@/containers/exportConts"
import FeaturedCreators from "@/containers/homepage/featured_creators"

export default function Home() {
	return (
		<>
			<Head>
				<title>Greenance</title>
				<meta
					name="description"
					content="Greenance Project - Climate financing on the blockchain"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/greenance_favicon.png" />
			</Head>
			<Header />
			<Campaigns />
			<HowItWorks />
			{/* <Blog /> */}
			<FeaturedCreators />
		</>
	)
}
