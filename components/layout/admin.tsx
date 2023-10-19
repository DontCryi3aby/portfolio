import { LayoutProps } from '@/models/common'
import * as React from 'react'

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Admin layout</h1>
			<h2>Sidebar</h2>

			<div>{children}</div>
		</div>
	)
}
