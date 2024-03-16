import React from 'react'
import Genre from './Genre'

const Container = () => {
  return (
    <>
        <Genre name={"Comedy"} description={"Funny for families"} movieTitle1={"Hello1"} movieTitle2={"Hello2"}/>
        <Genre name={"Horror"} description={"Scary and thrilling"} movieTitle1={"Hello1"} movieTitle2={"Hello2"}/>
    </>
  )
}

export default Container