import { Routes as ReactRouters, Route } from "react-router-dom"
import Home from "./page/home"
export default function Routes() {
  return (
    <ReactRouters>
      <Route path="/" element={<Home />} />
    </ReactRouters>
  )
}
