import {MouseEventHandler} from "react";


export type ButtonVariant = 'yellow' | 'red' | 'green'

export type ButtonProps = {
    variant: ButtonVariant,
    loading?: boolean,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}