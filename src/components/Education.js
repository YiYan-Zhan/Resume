import React from 'react'

function Education(props) {
  let { domain } = props
  let content = (
    <div className="education">
      <div className="high-school">
        <div className="school-info">
          <figure className="school-icon">
            <img src={domain + 'yingge.png'} alt="" />
          </figure>
          <h3>市立鶯歌工商 廣告設計科 畢 2011.09 - 2014.07</h3>
        </div>
        <div className="summary">
          <h4>學習重點</h4>
          <ol>
            <li>Adobe Illustrator 視覺插畫設計</li>
            <li>Adobe PhotoShop 影像修圖</li>
          </ol>
        </div>
      </div>
      <div className="university">
        <div className="school-info">
          <figure className="school-icon">
            <img src={domain + 'tut.jpg'} alt="" />
          </figure>
          <h3>台南應用科技大學 資訊管理學系 畢 2014.09 - 2018.07</h3>
        </div>

        <div className="summary">
          <h4>學習重點</h4>
          <ol>
            <li>畢業專題製作: 物聯網-居家生活智能應用 by Arduino (C#)</li>
            <li>程式語言: JAVA基礎 (JAVA)</li>
            <li>網路管理概論</li>
            <li>網站設計與製作(Google網站)</li>
          </ol>
        </div>
      </div>
    </div>
  )
  return <>{content}</>
}

export default Education
