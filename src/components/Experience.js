import React from 'react'

function Experience(props) {
  let content = (
    <div className="experience">
      <div className="work-experience">
        <h3>思譜科瑞供應鏈管理(上海)有限公司 2019.08 - 2021.02</h3>
        <h4>行政主管</h4>
        <ol>
          <li>
            公司對外平面視覺設計與製作:
            製作公司內所有同事及老闆之名片、公司宣傳用Brochure，以及網站基礎視覺
          </li>
          <li>
            公司內部文件分類與管控: 以公司行政負責人參與過SGS的GDP及ISO
            9001:2015審核認證，並順利通過得到SGS的認證
          </li>
          <li>
            公司之域名所有權管理者:
            管理各個域名紀錄之解析，如網站、郵箱等，並能熟練操作其指向
          </li>
          <li>
            上海總公司財務負責人
            透過電子郵件溝通負責與國外之合作夥伴接洽付款及收款事宜，並具上海、北京兩分公司之支出項審核權限
          </li>
        </ol>
      </div>
      <div className="study-experience">
        <h3>資策會-前端工程師就業養成班 2021.03 - 2021.08</h3>
        <h4>培訓技能</h4>
        <ol>
          <li>HTML、CSS，網站之骨架與視覺製作</li>
          <li>Javascript，網站與使用者互動之程式語言</li>
          <li>PHP，網站後台製作</li>
          <li>NodeJS-Express，後端之server架設</li>
          <li>ReactJS，前端網頁框架</li>
        </ol>
      </div>
    </div>
  )
  return <>{content}</>
}

export default Experience
