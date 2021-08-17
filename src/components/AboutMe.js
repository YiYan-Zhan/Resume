import React from 'react'

function AboutMe(props) {
  let content = (
    <div className="about-me">
      <h3 className="my-slogan">
        身為團隊的一份子，我能做到精確並帶耐心的溝通，服從領導安排的同時不失自己的主見，
        對事情嚴格看待，對人圓融相處， 已確保團隊和諧並兼顧工作成效。
      </h3>
      <div className="my-summary">
        <h4>我的簡介</h4>
        <p>
          Dear Reviewer， 你好！
          詹宜諺，1996/08/23，畢業於市立鶯歌工商廣告設計科及台南應用科技大學資訊管理系，具平面設計及程式設計之技術。
          <br />
          <br />
          大學時製作的畢業專題為Arduino物聯網居家生活開發，使用之程式語言為C++
          出社會後第一份工作到了上海的一家貨代公司擔任美術及行政負責人，有幸見到了不同於台灣的國際大都市，一年半左右感受下來，中國大陸可以用"全命已赴"來形容那邊的競爭之激烈，在這個環境下算是讓我學到了國際大都市的嚴厲與現實。
          <br />
          <br />
          離開上一份工作的原因是我評估了下自己所具備的條件，讓我不滿足止步於平面美術及兼負行政，現階段我的人生追求是"找到一份只有自己能做的工作"，而選擇進修前端技術。
          <br />
          在進修學習的過程中不斷學到新技術的同時，我越發明顯感受到自己在前端工程師的優勢，我具備了平面設計的技術，能做到網站的視覺規劃；我具備了程式設計的經驗，能做到前端使用者互動及後端伺服器架設，讓我不禁感受到這是一門相逢恨晚的技術。
          <br />
          <br />
          "做著這份工作，則代表世界上的某個人因為我的緣故而得不到這份工作"
          這是我前老闆對我離開前的提點，端正了我未來的所有求職態度。
          每一個機會的每一個決定對自己與對公司都得來不易，
          若有機會成為被選擇上的那個人，一定盡我所能的對自己也對其他人負責。
        </p>
      </div>
    </div>
  )
  return <>{content}</>
}

export default AboutMe
