import { LayoutProps } from '@/models/common'
import * as React from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Main layout</h1>

			<div>{children}</div>
		</div>
	)
}
