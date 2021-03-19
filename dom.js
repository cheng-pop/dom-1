window.dom = {
    //创建节点
    create(string){
        const container = document.createElement("template")  //template可容纳任何标签
        container.innerHTML = string.trim()       //trim()把字符串两边空格去掉
        return container.content.firstChild
    },

    after(node, node2){
        node.parentNode.insertBefore(node2,node.nextSibling)
    },

    before(node, node2){
        node.parentNode.insertBefore(node2,node)
    },
    //新增儿子
    append(parent, node){
        parent.appendChild(node)
    },
    //新增爸爸
    wrap(node, parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
    //删除节点
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    //删除子代
    empty(node){
        const array =[]
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x=node.firstChild
        }
        return array
    },
    //读写属性
    attr(node,name,value){
        if(arguments.length === 3){
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    //读写文本内容
    text(node,string){
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string    //IE
            }else{
                node.textContent = string  //firefox/chrome
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    //读写HTML内容
    html(node,string){
        if(arguments.length === 2){
            node.innerHTML= string   
           
        }else if(arguments.length === 1){
                return node.innerHTML
        }
    },
    //修改style
    style(node,name,value){
        if(arguments.length === 3){
            //dom.style(div,'color','red)
            node.style[name]= value   
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]= value
            }else if(name instanceof Object){
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }  
        }
    },
   
    class: {
        //添加class
        add(node,className){
            node.classList.add(className)
        },
        //删除class
        remove(node,className){
            node.classList.remove(className)
        },
        //是否有class
        has(node,className){
            return node.classList.contains(className)
        }
    },
    //添加事件监听
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    //删除事件监听
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    //获取标签或标签们
    find(selector,scope){    //scope范围
        return (scope || document).querySelectorAll(selector)
    },
    //获取父元素
    parent(node){    
        return node.parentNode
    },
    //获取子元素
    children(node){    
        return node.children
    },
    //获取兄弟姐妹
    siblings(node){    
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    //获取弟弟
    next(node){ 
        let x = node.nextSibling
        while(x && x.nodeType === 3) {
            x=x.nextSibling
        }  
        return x
    },
    //获取哥哥
    previous(node){ 
        let x = node.previousSibling
        while(x && x.nodeType === 3) {
            x=x.previousSibling
        }  
        return x
    },
    //遍历所有节点
    each(nodeList,fn){ 
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    //获取排行第几
    index(node){ 
        const list = dom.children(node.parentNode)
        let i;
        for(i=0;i<list.length;i++){
            if(list[i] === node){
                break
            }     
        }
        return i
    },

}