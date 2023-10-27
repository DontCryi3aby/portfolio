import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function HeaderDesktop() {
	const router = useRouter()

	// Use to check which route active at Header
	const pageRootPerPage = '/' + router.pathname.split('/')[1]

	return (
		<Stack direction="row" justifyContent="flex-end" display={{ xs: 'none', md: 'flex' }}>
			{ROUTE_LIST.map((route, index) => (
				<Link key={index} href={route.path} passHref>
					<MuiLink
						sx={{ p: 2, fontWeight: 'medium' }}
						className={clsx({ active: pageRootPerPage === route.path })}
					>
						{route.label}
					</MuiLink>
				</Link>
			))}
		</Stack>
	)
}
