import { useRouter } from 'next/dist/client/router'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'

export interface UsersDProps {
	user: any
}

export default function PostsIDPage({ user }: UsersDProps) {
	const router = useRouter()

	if (!user) {
		return
	}

	return (
		<div>
			<h1>{user.name}</h1>
			<h1>{user.email}</h1>
			<h1>{user.phone}</h1>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const api = 'https://jsonplaceholder.typicode.com/users'

	const res = await fetch(api)
	const data = await res.json()

	return {
		paths: data.map((d: any) => ({ params: { userId: d.id.toString() } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<UsersDProps> = async (
	context: GetStaticPropsContext
) => {
	const UID = context.params?.userId
	console.log('UID: ', UID)
	const api = `https://jsonplaceholder.typicode.com/users/${UID}`

	const res = await fetch(api)
	const data = await res.json()

	console.log(data)
	if (!data) return { notFound: true }

	return {
		props: {
			user: data,
		},
	}
}
