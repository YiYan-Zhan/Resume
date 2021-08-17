import React, { useEffect, useState } from 'react'
import $ from 'jquery'
// 右側元件
import Experience from './Experience'
import Education from './Education'
import AboutMe from './AboutMe'
import ProjectMid from './ProjectMid'
import ProjectEnd from './ProjectEnd'
// 主程式
function Main() {
  let domain = '%PUBLIC_URL%/images/'
  // 切換nav效果in component did mount
  useEffect(() => {
    $('.menu li button').on('click', function () {
      $(this).addClass('active')
      $(this).closest('li').siblings().find('button').removeClass('active')
      setRightInfo($(this).text())
    })
  }, [])
  const [rightInfo, setRightInfo] = useState('Experience')
  return (
    <>
      <main>
        <div className="left-info">
          <div className="mine">
            <figure className="avatar">
              <img src={domain + 'myphoto.jpg'} alt="" />
            </figure>
            <div className="personal-info">
              <h3>詹宜諺 / Vincent Jan</h3>
              <div className="info mobile">
                <i className="fas fa-mobile-alt"></i>
                <h4>0988367981</h4>
              </div>
              <div className="info email">
                <i className="fas fa-envelope"></i>
                <h4>yiyanzhan0823@gmail.com</h4>
              </div>
              <div class="info git">
                <i class="fab fa-github"></i>
                <h4>YiYan-Zhan</h4>
              </div>
            </div>
          </div>

          <ul className="menu">
            <li>
              <button className="active">經歷</button>
            </li>
            <li>
              <button>學歷</button>
            </li>
            <li>
              <button>我的簡介</button>
            </li>
            <li>
              <button>專題-期中</button>
            </li>
            <li>
              <button>專題-期末</button>
            </li>
          </ul>
        </div>
        <div className="right-content">
          <div className="content">
            {rightInfo === '經歷' && <Experience domain={domain} />}
            {rightInfo === '學歷' && <Education domain={domain} />}
            {rightInfo === '我的簡介' && <AboutMe domain={domain} />}
            {rightInfo === '專題-期中' && <ProjectMid domain={domain} />}
            {rightInfo === '專題-期末' && <ProjectEnd domain={domain} />}
          </div>
        </div>
      </main>
    </>
  )
}
export default Main
