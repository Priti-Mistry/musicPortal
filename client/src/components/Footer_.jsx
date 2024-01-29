import { Footer } from "antd/es/layout/layout"
import './style.css'

function Footer_() {
  return (
    <Footer className="footer" >
        Music Portal ©{new Date().getFullYear()} Created by Priti Mistry
      </Footer>
  )
}

export default Footer_
