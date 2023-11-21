import { Box, Skeleton, Stack, Typography } from '@mui/material'

export function WorkSkeleton() {
	return (
		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
			<Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
				<Skeleton variant="rectangular" width={246} height={180} />
			</Box>

			<Box textAlign={{ xs: 'center', sm: 'left' }} flex={1}>
				<Typography variant="h5" fontWeight="bold">
					<Skeleton />
				</Typography>

				<Stack
					direction="row"
					spacing={4}
					mt={2}
					justifyContent={{ xs: 'center', sm: 'flex-start' }}
				>
					<Skeleton variant="rectangular" width={50} height={24} />

					<Typography color="GrayText" flex={1}>
						<Skeleton variant="rectangular" height={24} />
					</Typography>
				</Stack>

				<Typography textAlign="justify" mt={2}>
					<Skeleton />
					<Skeleton />
					<Skeleton width="40%" />
				</Typography>
			</Box>
		</Stack>
	)
}
