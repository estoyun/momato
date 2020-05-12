import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Tomato from "../tomato/Tomato"
import TomatoCnt from "../tomato/TomatoCnt"
import Modals from "../common/Modal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const TomatoList = (props) => {
  let templateIdx = props.templateIdx
  let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
  if (!templateIdx) {
    templateIdx = 0
  } else {
    date = ""
  }
  const data = {
    date,
    templateIdx,
  }
  useEffect(() => {
    props.getTomatoList(data)
  }, [props.templateIdx])
  useEffect(() => {
    props.getTomatoList(data)
  }, [props.tomatoAddReducer.isTomatoAddSucceed])
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      props.getTomatoList(data)
      props.clearDeleteResult()
    } else {
      props.getTempTomatoList()
    }
  }, [props.tomatoDeleteReducer.isTomatoDeleteSucceed])
  const tomatos = props.tomatoReducer.tomatos
  const templates = props.templateReducer.templates
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {templateIdx ? (
        <></>
      ) : (
        <>
          <TomatoCnt tomatos={tomatos}></TomatoCnt>
          <Modals addTomatos={props.addTomatos} templates={templates} type="loadTemplate" />
        </>
      )}
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            isLogin={props.loginReducer.isLogin}
            tomatoDelete={props.tomatoDelete}
            getTomatoList={props.getTomatoList}
            getTempTomatoList={props.getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals templateIdx={props.templateIdx} type="tomatoAdd"></Modals>
    </div>
  )
}

export default TomatoList
