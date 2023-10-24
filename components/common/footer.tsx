import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'
import { Box, Container, Icon, Typography } from '@mui/material'
import * as React from 'react'

const SOCIAL_LIST = [
	{
		icon: Facebook,
		url: 'https://www.facebook.com/',
	},
	{
		icon: Instagram,
		url: 'https://www.instagram.com/',
	},
	{
		icon: Twitter,
		url: 'https://twitter.com/',
	},
	{
		icon: LinkedIn,
		url: 'https://www.linkedin.com/',
	},
]

export default function Footer() {
	return (
		<Box component="footer" py={2} textAlign="center">
			<Container>
				{SOCIAL_LIST.map((item, index) => (
					<Box
						key={index}
						component="a"
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						p={2}
					>
						<item.icon sx={{ fontSize: 48, color: '#21243D' }} />
					</Box>
				))}
			</Container>

			<Typography mt={2}>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
		</Box>
	)
}
