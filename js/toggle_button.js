
     /* language 버튼*/
      const box = document.querySelector('div.btn')

      const panel = document.querySelector('div.box-header')
      box.addEventListener('click', () => {
        box.classList.toggle('on')
        panel.classList.add('active')
      })
 
       /* 분야별 업무 사이트 버튼*/
      const box2 = document.querySelector('div.btn2')

      const panel2 = document.querySelector('div.box-header2')
      box2.addEventListener('click', () => {
        box2.classList.toggle('on')
        panel2.classList.add('active')
      })
  