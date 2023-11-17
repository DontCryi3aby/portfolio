import { Auth } from '@/components/common'
import { MainLayout } from '@/components/layout'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import axiosClient from 'api-client/axios-client'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SWRConfig } from 'swr'
import { AppPropsWithLayout } from '../models'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? MainLayout
	const PrivatePage = Component.isPrivate ? Auth : Fragment

	return (
		<CacheProvider value={emotionCache}>
			``
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ToastContainer />

				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<PrivatePage>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</PrivatePage>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	)
}
export default MyApp
