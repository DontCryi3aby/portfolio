import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import avatar from '@/public/assets/imgs/avt.png'

export function HeroSection() {
	return (
		<Box mt={10}>
			<Container>
				<Stack
					spacing={5}
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
				>
					<Box>
						<Typography component="h1" variant="h3" fontWeight="bold">
							Hi, I am John,
							<br />
							Creative Technologist
						</Typography>
						<Typography mt={{ xs: 3, md: 5 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button variant="contained" size="large" sx={{ mt: { xs: 3, md: 5 } }}>
							Download Resume
						</Button>
					</Box>

					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image layout="responsive" src={avatar} alt="avatar" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
