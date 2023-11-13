import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'

export default function HeaderMobile() {
	const router = useRouter()
	const [stateDrawer, setStateDrawer] = React.useState(false)

	const { profile, logout } = useAuth()
	const isLoggedIn = !!profile?.username
	// Show list route base on status login or not
	const routeList = ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn)

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return
		}

		setStateDrawer(open)
	}

	return (
		<Stack direction="row" justifyContent="flex-end" display={{ xs: 'flex', md: 'none' }}>
			<Button sx={{ p: 2, color: 'black' }} onClick={toggleDrawer(true)}>
				HEADER MOBILE
			</Button>
			<Drawer anchor="top" open={stateDrawer} onClose={toggleDrawer(false)}>
				{routeList.map((route, index) => (
					<Link key={index} href={route.path} passHref>
						<Box
							sx={{
								p: 2,
								display: 'inline-block',
								'&:hover': { bgcolor: 'action.hover', cursor: 'pointer' },
								'&.active': { color: 'primary.main' },
							}}
							className={clsx({ active: router.pathname === route.path })}
						>
							{route.label}
						</Box>
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
			</Drawer>
		</Stack>
	)
}
