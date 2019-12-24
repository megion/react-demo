import React from "react"
import ArticleLoader from "./ArticleLoader"
import ArticleList from "../components/ArticleList"
import { useParams } from "react-router-dom"

export default function ArticlePage() {
  //let { id } = useParams()
  let { id } = useParams()
  //let { id } = match.params
  return (
    <div>
      <p>Article list:</p>
      <ArticleList />
      {/*
        use key for full remount component when id changed
        */}
      <ArticleLoader id={id} key={id} />
    </div>
  )
}
