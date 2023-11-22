import { TextField, TextFieldProps } from '@mui/material'
import { Control } from 'react-hook-form/dist/types'
import { useController } from 'react-hook-form'
import { ChangeEvent } from 'react'

export type InputFieldProps = TextFieldProps & {
	name: string
	control: Control<any>
}

export const InputField = ({
	name,
	control,
	onChange: externalOnChange,
	onBlur: externalOnBlur,
	ref: externalRef,
	value: externalValue,
	...rest
}: InputFieldProps) => {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController({ name, control })

	return (
		<TextField
			fullWidth
			size="small"
			margin="normal"
			name={name}
			value={value}
			inputRef={ref}
			onChange={(event: ChangeEvent<HTMLInputElement>) => {
				onChange(event)
				externalOnChange?.(event)
			}}
			onBlur={onBlur}
			error={!!error}
			helperText={error?.message}
			{...rest}
		/>
	)
}
