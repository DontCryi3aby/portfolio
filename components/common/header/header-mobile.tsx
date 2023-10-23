import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function HeaderMobile() {
	const router = useRouter()
	const [stateDrawer, setStateDrawer] = React.useState(false)

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
				{ROUTE_LIST.map((route, index) => (
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
			</Drawer>
		</Stack>
	)
}
