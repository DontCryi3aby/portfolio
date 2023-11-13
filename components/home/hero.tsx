import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import avatar from '@/public/assets/imgs/avt.png'
import { Link } from '@mui/material'

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
							Hi, I am Thach,
							<br />
							Creative Technologist
						</Typography>
						<Typography mt={{ xs: 3, md: 5 }}>
							This is a self-learing project using <b>NextJS</b>
							<br />
							Contact for work:
							<Link sx={{ color: 'primary.main', ml: '2px' }} href="mailto:i3oyhp@gmail.com">
								i3oyhp@gmail.com
							</Link>
							<br />
							Github repository:
							<Link sx={{ ml: '2px' }} href="https://github.com/DontCryi3aby/portfolio">
								https://github.com/DontCryi3aby/portfolio
							</Link>
							<br />
							Click Download CV below to view my CV!
						</Typography>
						<Button variant="contained" size="large" sx={{ mt: { xs: 3, md: 5 } }}>
							Download CV
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
