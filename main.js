const div = dom.create('<div>newDiv</div>')
console.log(div)

dom.after(text, div)

dom.before(text, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(text,div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(text, 'title', 'hello')
const title = dom.attr(text,'title')
console.log(`title: ${title}`)

dom.text(text,'这里更新了')
dom.text(text)

dom.style(text1, {border: '1px solid red', color: ' blue'})
// console.log(dom.style(text1, 'color'))
dom.style(text, 'border', '1px solid black')

dom.class.add(text1,'red')
dom.class.add(text1,'blue')
dom.class.remove(text1,'blue')
console.log(dom.class.has(text1,'blue'))

const fn = () =>{
    console.log('点击了')
}
dom.on(text,'click',fn)
dom.off(text,'click',fn)

const textDiv = dom.find('#text')[0]
console.log(textDiv)
const text2 = dom.find('#text2')[0]
console.log(dom.find('.red',text2)[0])

console.log(dom.parent(text))
console.log(dom.children(siblings))

console.log(dom.siblings(dom.find('#s2')[0]))
console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n) => dom.style(n,'color','red'))

console.log(dom.index(s1))