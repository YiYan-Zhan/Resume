import React from 'react'
import ProjectCommon from './ProjectCommon'
function ProjectMid(props) {
  let { domain } = props
  return (
    <>
      <ProjectCommon />
      <h4>期中-專題後台</h4>
      <div className="middle-part">
        <p>
          本人期中所負責之部分為登入介面、員工管理。
          <br />
          <ol>
            <li>
              <div className="middle-info">
                登入介面:
                <br />
                管理員於後台登入網址輸入帳號及密碼即可進行登入，實現基礎帳號安全性防護(錯誤超過五次不予受理登入)、輸入網址處防護(若於登入前輸入系統內網址，則將使用者導向至登入介面)
              </div>
              <figure className="middle-img">
                <img src={domain + 'backend-login.png'} alt="" />
              </figure>
            </li>

            <li>
              <div className="middle-info">
                員工管理:
                <br />
                管理員之帳號資料維護，包括帳號、密碼、頭像、在職狀況等。(若離職則無法登入)
              </div>
              <figure className="middle-img">
                <img src={domain + 'backend-employee.png'} alt="" />
              </figure>
            </li>
          </ol>
        </p>
      </div>
    </>
  )
}

export default ProjectMid
