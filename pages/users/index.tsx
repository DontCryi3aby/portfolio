import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

export interface UsersProps {
	users: any[]
}

export default function PostsIndexPage({ users }: UsersProps) {
	return (
		<div>
			<h1>List user</h1>
			<ul>
				{users.map((u) => (
					<li key={u.id}>
						<Link href={`/users/${u.id}`}>{u.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps<UsersProps> = async (
	context: GetStaticPropsContext
) => {
	const api = 'https://jsonplaceholder.typicode.com/users'

	const res = await fetch(api)
	const data = await res.json()

	return {
		props: {
			users: data.map((d: any) => ({ id: d.id, name: d.name, email: d.email })),
		},
	}
}
