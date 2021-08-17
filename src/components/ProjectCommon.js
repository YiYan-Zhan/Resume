import React from 'react'

function ProjectCommon(props) {
  let content = (
    <div className="project-common">
      <h2>資策會培訓專題-Elfin音樂餐廳</h2>
      <h3>緣由</h3>
      <p>
        鑒於有感科技加速生活步調，本專題之應用情境希望消費者有個空間能夠喘口氣停下腳步，
        <br />
        而我們對於"放鬆"二字之聯想之結論為"音樂、森林、美食"，因而構成了專題製作。
      </p>

      <h3>摘要</h3>
      <p>
        本專題之前台採前後端分離之設計(React+NodeJs)，後台採PHP+MySQL前後端合併之設計。
        <br />
        操作進程:
        經營方若有網站之商品或表演者變更，可透過後台進行新增、刪除、修改。
        網站前台也會跟著有著相應的變化。
      </p>
    </div>
  )
  return <>{content}</>
}

export default ProjectCommon
