import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function HeaderDesktop() {
	const router = useRouter()

	return (
		<Stack
			direction="row"
			justifyContent="flex-end"
			display={{ xs: 'none', sm: 'none', md: 'flex' }}
		>
			{ROUTE_LIST.map((route, index) => (
				<Link key={index} href={route.path} passHref>
					<MuiLink sx={{ p: 2 }} className={clsx({ active: router.pathname === route.path })}>
						{route.label}
					</MuiLink>
				</Link>
			))}
		</Stack>
	)
}
