import { Inter } from 'next/font/google'
import './index.css'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="flex-grow">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

