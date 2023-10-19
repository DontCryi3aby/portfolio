import { useRouter } from 'next/dist/client/router'

export interface PostsProps {}

export default function PostsIDPage(props: PostsProps) {
	const router = useRouter()

	return <div>POST ID Page, {router.query.id}</div>
}
