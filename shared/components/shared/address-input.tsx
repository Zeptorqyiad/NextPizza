'use client'

import React from 'react'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

interface Props {
    onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            token="3611b2a88937304610fc143cb4f4d985dd60e209"
            onChange={(data) => onChange?.(data?.value)}
        />
    )
}
