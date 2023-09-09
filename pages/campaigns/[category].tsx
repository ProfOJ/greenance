import { CampaignsPage } from "@/containers/exportConts"
import Error from "next/error"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Campaigns(){
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
        <title>{"Greenance | Campaigns"}</title>
        <meta name="description" content="Greenance Project - Climate financing on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/greenance_favicon.png" />
      </Head>
      {
        category && typeof(category) == "string" ? <CampaignsPage cat={category} offVal={0}/> : <Error statusCode={404}/>
      }
    </>
  )
}