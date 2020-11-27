import React, { useState } from "react";
// import MDRenderer from "../components/markdownRenderer";

import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";

// flex 나 mui 그리드로 좌우 배치 ?

export default function Main() {

  const [mdText, SetMdText] = useState("");

  const HandleTyping = (e) => {
    // console.log(e)
    console.log(e.target.value)
    let tmp = Thugson(e.target.value)
    SetMdText(tmp)
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Container maxWidth="md" style={{ padding: "0px 24px" }}>
            <TextareaAutosize
              style={{
                width: "100%",
                height: "90vh",

              }}
              // rowsMax={10}
              // rowsMin={3}
              placeholder="paste any javascript object"
              onKeyUp={HandleTyping}
              defaultValue={mdText}
            // defaultValue="# Hello NXV Markdown Editor"
            />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container maxWidth="md">
            <TextareaAutosize
              style={{
                width: "100%",
                height: "90vh",

              }}
              // rowsMax={10}
              // rowsMin={3}
              placeholder="JSON"
              onKeyUp={HandleTyping}
              value={mdText}
            // defaultValue="# Hello NXV Markdown Editor"
            />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

//<MDRenderer style={{height:"900"}} mdText={"Hello"} />



function Thugson(tmp) {

   // eslint-disable-next-line no-unused-vars
   var window,
   // eslint-disable-next-line no-unused-vars
   document,
   // eslint-disable-next-line no-unused-vars
   fetch = null;

  // eslint-disable-next-line no-new-func
  let evalFunc = new Function('tmp'
    , `

var data = ${tmp}
console.log(data)

console.log("여기서 stringify"); 

try {
  let test2 = JSON.stringify(data);
  console.log(test2)
  return test2

} catch(err) {
  console.log(err)
}


`
  )






  let godLikeAnswer = evalFunc();

  console.log(godLikeAnswer)

  return godLikeAnswer
}