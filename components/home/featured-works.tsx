import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'
import { WorkList } from '../work'

const WORK_LIST_DEMO = [
	{
		id: 1,
		title: 'Designing Dashboards',
		createdAt: '1698141860967',
		updatedAt: '1698141860967',
		tagList: ['Dashboard'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnail:
			'https://res.cloudinary.com/dfuskfien/image/upload/v1698117604/Portfolio/Item1_eu5kth.jpg',
	},
	{
		id: 2,
		title: 'Vibrant Portraits of 2020',
		createdAt: '1698141860967',
		updatedAt: '1698141860967',
		tagList: ['Illustration'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnail:
			'https://res.cloudinary.com/dfuskfien/image/upload/v1698117604/Portfolio/Item2_bjcgbm.jpg',
	},
	{
		id: 3,
		title: '36 Days of Malayalam type',
		createdAt: '1698141860967',
		updatedAt: '1698141860967',
		tagList: ['Typography'],
		shortDescription:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		fullDescription: '',
		thumbnail:
			'https://res.cloudinary.com/dfuskfien/image/upload/v1698117604/Portfolio/item3_aqfirj.jpg',
	},
]

export function FeaturedWork() {
	return (
		<Box>
			<Container>
				<Typography variant="h5" p={2} mt={2}>
					Featured works
				</Typography>

				<WorkList workList={WORK_LIST_DEMO} />
			</Container>
		</Box>
	)
}
