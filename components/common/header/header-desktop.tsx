import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useAuth } from '@/hooks'

export default function HeaderDesktop() {
	const router = useRouter()
	const { profile, logout } = useAuth()

	// Use to check which route active at Header
	const pageRootPerPage = '/' + router.pathname.split('/')[1]

	const isLoggedIn = !!profile?.username
	// Show list route base on status login or not
	const routeList = ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn)

	return (
		<Stack direction="row" justifyContent="flex-end" display={{ xs: 'none', md: 'flex' }}>
			{routeList.map((route, index) => (
				<Link key={index} href={route.path} passHref>
					<MuiLink
						sx={{ p: 2, fontWeight: 'medium' }}
						className={clsx({ active: pageRootPerPage === route.path })}
					>
						{route.label}
					</MuiLink>
				</Link>
			))}
			{!isLoggedIn ? (
				<Link href="/login" passHref>
					<MuiLink sx={{ p: 2, fontWeight: 'medium' }}>Login</MuiLink>
				</Link>
			) : (
				<MuiLink sx={{ p: 2, fontWeight: 'medium', cursor: 'pointer' }} onClick={logout}>
					Logout
				</MuiLink>
			)}
		</Stack>
	)
}
