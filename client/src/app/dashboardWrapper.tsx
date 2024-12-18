import React from 'react'

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      DashboardWrapper: {children}
      Sidebar
      <main className='flex flex-col w-full h-full py-7 px-9 bg-gray-50'>
        {children}
      </main>
    </div>
  )
}

export default DashboardWrapper