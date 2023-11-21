import { workApi } from '@/api-client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	useEffect(() => {
		;(async () => {
			try {
				const workList = await workApi.getAll({ _page: 1 })
				console.log({ workList })
			} catch (error) {
				console.log('failed: ', error)
			}
		})()
	}, [])

	return (
		<Box component="h1" color="red">
			Works Page
		</Box>
	)
}

export const getStaticProps = async () => {
	return { props: {} }
}
