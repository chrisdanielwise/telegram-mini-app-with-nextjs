import { useEffect, useState } from "react"
import ReferralSystem from "./components/ReferralSystem"


export default function Home(){
  const [initData,setInitData] = useState('')
  const [userId,setUserId] = useState('')
  const [startParam,setStartParam] = useState('')
  useEffect(async()=>{
    const initWebApp = async () => {
      if(typeof window !== 'undefined'){
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
        setInitData(WebApp.initData)
        setUserId(WebApp.initDataUnsafe.user?.id.toString() || '')
        setStartParam(WebApp.initDataUnsafe.start_param || '')
      }
    }
    await initWebApp()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center jusify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Telegram Referral Demo</h1>
      <ReferralSystem initData={initData} userId={userId} startParam={startParam}/>
    </main>
  )
}