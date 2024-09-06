"use client"

import { useEffect, useState } from "react"
import ReferralSystem from "./components/ReferralSystem"

interface UserData {
  id: number
  first_name:string
  last_name?:string
  username?: string
  language_code:string
  is_premium?:boolean
}

export default function Home(){
  const [initData,setInitData] = useState('')
  const [userId,setUserId] = useState('')
  const [startParam,setStartParam] = useState('')
  useEffect(()=>{
    const initWebApp = async () => {
      if(typeof window !== 'undefined'){
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
        setInitData(WebApp.initData)
        setUserId(WebApp.initDataUnsafe.user?.id.toString() || '')
        setStartParam(WebApp.initDataUnsafe.start_param || '')
        if(WebApp.initDataUnsafe.user) console.log(WebApp.initDataUnsafe.user as UserData)
      }
    }
     initWebApp()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center jusify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Telegram Referral Demo</h1>
      <ReferralSystem initData={initData} userId={userId} startParam={startParam}/>
    </main>
  )
}