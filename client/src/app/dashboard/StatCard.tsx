import { LucideIcon } from 'lucide-react';
import React from 'react'

type StatDetail = {
    title: string;
    amount: string;
    changePercentage: number;
    IconComponent: LucideIcon;
}

type StatCardProps = {
    title: string;
    primaryIcon: JSX.Element;
    details: StatDetail[];
    dateRange: string;
}

const StatCard = ({
    title,
    primaryIcon,
    details,
    dateRange
}: StatCardProps ) =>{
    const formatPercentage = (value: number) => {
        const signal = value >= 0 ? "+" : "";
        return `${signal}${value.toFixed()}%`
    }

    const getChangeColor = (value: number) => {
        value >= 0 ? "text-green-500" : "text-red-500"
    }
    return (
        <div className="bg-white md:row-span-1 xl:row-span-2">
            Statcard
        </div>
    )
}


export default StatCard