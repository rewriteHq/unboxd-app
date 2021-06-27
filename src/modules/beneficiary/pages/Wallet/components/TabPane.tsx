import React from 'react'
import { Tab } from '../styles'

interface ITabProps {
    title:string;
    isActive: boolean;
    onChangeTab: () => void;
}

export const TabPane = ({title, isActive, onChangeTab}: ITabProps) => {
    return (
       <Tab className={`${isActive && 'activeTab'}`} onClick={onChangeTab}>
           {title}
       </Tab>
    )
}
