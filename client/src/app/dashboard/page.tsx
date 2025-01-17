"use client"

import React from 'react'
import CardPopularProducts from './CardPopularProducts'
import CardSalesSummary from './CardSalesSummary'
import CardPurchaseSummary from './CardPurchaseSummary'
import CardExpenseSummary from './CardExpenseSummary'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
      <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
    </div>
  );
}

export default Dashboard