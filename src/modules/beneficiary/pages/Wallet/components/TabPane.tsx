import React from 'react'
import { Tab } from '../styles'

interface ITabProps {
    title:string;
    isActive: boolean;
    onChange: () => void;
}

export const TabPane = ({title, isActive, onChange}: ITabProps) => {
    return (
       <Tab className={`${isActive && 'activeTab'}`} onClick={onChange}>
           {title}
       </Tab>
    )
}
