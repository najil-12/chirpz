import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Typography, { TypographyProps } from '../../components/Typography'


interface Props extends TypographyProps {
    children: string;
    readMoreProps?: TypographyProps;
}

const CollapsibleText = ({ children, readMoreProps = { color: '#A6B6D6', size: 15 }, ...props }: Props) => {
    const [isOpen, setIsOpen] = useState(children.length > 150)
    if (isOpen) {
        return <Typography {...props}>{children.slice(0, 150)}...<Typography onPress={() => setIsOpen(!isOpen)} {...readMoreProps}>Read More</Typography></Typography>
    } else {
        return <Typography {...props}>{children}</Typography>
    }
}

export default CollapsibleText