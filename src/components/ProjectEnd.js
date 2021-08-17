import React from 'react'
import ProjectCommon from './ProjectCommon'
function ProjectEnd(props) {
  let { domain } = props

  return (
    <>
      <ProjectCommon />
      <div class="final-part">
        <h4>期末-專題前台</h4>
        <p>
          本人期末前台負責之事項為首頁
          <br />
          詳細介紹如下:
          <ol>
            <li>
              直播系統:
              <br />
              透過youtube+OBS進行直播，以利無法到場之消費者一同觀賞(youtube-v3-api)
            </li>
            <li>
              投票系統:
              <br />
              藉由收集消費者之傾向歌手意願，進而安排後續行事曆，以促進消費者參與意願
            </li>
            <li>
              訂位系統(第一步):
              <br />
              使用者可於首頁選定訂票日期，點選下一步之後將使用者導到訂位頁，進行後續訂餐、付款事項
            </li>
            <li>
              購物車:
              <br />
              考量到有消費者可能只有用餐意願，並無觀賞表演的念頭，我們開發出外送系統。使用者可於首頁將餐點加入至購物車後，點選下一步前往外送頁面進行位置及日期選擇
            </li>
          </ol>
          <figure class="end-img">
            <img src={domain + '首頁 版本2.png'} alt="" />
          </figure>
        </p>
      </div>
    </>
  )
}

export default ProjectEnd
