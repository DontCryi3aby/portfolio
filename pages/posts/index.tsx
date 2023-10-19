import { MainLayout } from '@/components/layout'
import { GetStaticProps, GetStaticPropsContext } from 'next'

export interface PostsProps {
	posts: any[]
}

export default function PostsIndexPage(props: PostsProps) {
	return <div>POST Index Page</div>
}

PostsIndexPage.Layout = MainLayout
PostsIndexPage.isPrivate = true
