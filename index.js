const fs = require("fs")
function obfuscador(data){
    let variables = {}
    let functions = {}
    let strings = []
    let lista = [["A","А"],["B","В"],["З","3"],["І","I"],["К","K"],["М","M"],["Н","H"],["Р","P"],["а","а"],["р","p"],["с","с"],["і","i"]]
    let codigo = lista[Math.floor(Math.random() * lista.length )]
    let stringvar = random(codigo)

function parse_string(string){
        return string.split(" ").map(m=>{
            let j = random(codigo)
            strings.push([j,m])
            return `%{${stringvar}::${j}}%`
        }).join(" ")
}
    let y = data;
    y=`${y}`
    let l = y.split("\n")
    
    l=l.map(r=>{
        if(r.startsWith("#"))return
        let ra = r.split(" ")
        
        if(ra[0] === "function"){
            let j = b(r.split(""))
            j = j.join("").split(" ")
            
            j.map(l=>{
                if(!l.endsWith(":")) return l
                let lr = variables["local"+l.replace(":","")] || random(codigo)
                variables["local"+l.replace(":","")] = lr;
                r=r.replace(l.replace(":",""),lr)
            })
            return r
        }
        r=r.split(" ").map(m=>{
            let o = m
            o.split(" ").join("54609352325354").split(".").join("54609352325354").split("::").join("54609352325354").split("54609352325354").filter(u=>(u.includes("}") || u.includes("{")) && !u.includes("§") && !(u.includes(">") || u.includes("-") || (u.split("::")[0].split("'")[0].replace(/}/g,"").replace(/{/g,"").startsWith("%") && u.split("::")[0].split("'")[0].replace(/}/g,"").replace(/{/g,"").endsWith("%") && !u.includes("{") && !u.includes("}")))).map(lg=>{
                let n = lg.split("::")[0].split("'")[0].split('"')[0].replace(/}/g,"").replace(/{/g,"").replace(/%/g,"").replace(/{/g,"").replace(/}/g,"").split(".")[0]
                if(n.trim() === "") return o 
                if(n.endsWith('"')) return o
                if(n.includes("player")) return o
                
                if(n === "creditos") return o;
                if(n.startsWith("_")){
                    let nome = "local"+n.slice(1).trim()
                    let nome2 = n.slice(1).trim()
                    if(!variables[nome]){
                        variables[nome] = random(codigo)
                        o = o.replace(nome2,variables[nome])
                    }else{
                        o = o.replace(nome2,variables[nome])

                    }
                    
                }else{
                    let nome = "global"+n
                    let nome2 = n
                    if(!variables[nome]){
                        variables[nome] = random(codigo)
                        o = o.replace(nome2,variables[nome])
                    }else{
                        o = o.replace(nome2,variables[nome])

                    }
                    
                }
            })
            return o
        }).join(" ")
        if(r.includes('"')){
            let s = []
            let p = 0
            r.split("").map(y=>{
                p++;
                if(y === '"') s.push(p)
            })
            if(s.length === 2){
                let content = r.slice(s[0]-1,s[1])
                let content2 = r.slice(s[0],s[1]-1)
                r=r.replace(content,'"'+content2.split(" ").map(u=>{
                    if(u.includes("%") || u.includes("{") || u.includes("}")) return u;
                    return parse_string(u)
                }).join(" ")+'"')
  
            }
        }
        
        if(r.startsWith("on")){
            let q = Math.floor(Math.random() * 3)+1
            r=r.replace("on",`${"0".repeat(q).split("").map(u=>randommaker(codigo)).join("\n")}\non`)
        }
        if(r.startsWith("function")){
            let q = Math.floor(Math.random() * 3)+1
            r=r.replace("function",`${"0".repeat(q).split("").map(u=>randommaker(codigo)).join("\n")}\nfunction`)
        }
        if(r.startsWith("command")){
            let q = Math.floor(Math.random() * 3)+1
            r=r.replace("command",`${"0".repeat(q).split("").map(u=>randommaker(codigo)).join("\n")}\ncommand`)
        }
        return r
    }).filter(e=>e)
    l=l.join("\n")
    return `${strings[0] ? `on script load:\n   ${strings.sort((a,b)=>Math.floor(Math.random() * 100)-50).map(p=>{
        return `set {${stringvar}::${p[0]}} to "${p[1]}"`
    }).join("\n    ")}\n\n`:""}${l.split("\n").filter(y=>y.trim() != "").join("\n")}`
  function random(c){
    return "-".repeat(50).split("").map(u=>r()).join("")
    function r(){return c[Math.floor(Math.random() * c.length)]}
  }
  function b(k){
    return k.slice(k.indexOf("(")+1,k.indexOf(")"))
  }
  function randommaker(r){
    
    let lista = ["function","function","function","function","on chat","on script load","on join","on leave","on first join","on bed enter","on bed leave","on block damage","on block fertilize","on block growth","on book edit","on book sign","on break","on place","on damage","on death","on drop","on right click","on left click","on heal"]
    let lista2 = ["","_"] 
    let lista3 = [0,1,2]
    
    let t = "   "
    let quantidade = Math.floor(Math.random() * 9)+1
    let tl = lista[Math.floor(Math.random() * lista.length)]
    if(tl.includes("function")){
        let d = ``
        let name = random(r)
        let options = ["player","number","string","boolean"]
        d+=`function ${name}(${
            "4".repeat(Math.floor(Math.random() * 3)+1).split("").map(j=>{
                let option = options[Math.floor(Math.random() * options.length)]
                return `${random(r)}: ${option}`
            }).join(", ")
        }):\n`
        let options2 = ["broadcast","set","add","remove","if"/*,"loop all players","while"*/]
        let options2_1 = ["broadcast","set","add","remove"]
        function select(no){
            let selected_option = options2[Math.floor(Math.random() * options2.length)]
            let no_selected_option = options2_1[Math.floor(Math.random() * options2_1.length)]
            if(no) selected_option=no_selected_option
            if(selected_option === "broadcast"){
                return `   broadcast "${parse_string(random(r))}"\n`
            }
            if(selected_option === "set"){
                return `   set {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}} to "${parse_string(random(r))}"\n`
            }
            if(selected_option === "add"){
                return `   add ${Math.floor(Math.random() * 500)+100} to {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}}\n`
            }
            if(selected_option === "remove"){
                return `   remove ${Math.floor(Math.random() * 500)+100} from {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}}\n`
            }
            if(selected_option === "if"){
                return `   if {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}} is "${parse_string(random(r))}":\n   ${select(true)}   ${select(true)}   ${select(true)}`
            }
            
        }
        d+=select()
        d+=select()
        d+=select()
        
        return d
    }
    let d = `${tl}:\n`
    for(let k = 0;k<=quantidade;k++){
        let tpo = lista3[Math.floor(Math.random() * lista3.length)]
        if(tpo === 0){ d+=`${t}set {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}} to "${random(r)}"\n`}
        else if(tpo === 1){d+=`${t}add ${Math.floor(Math.random() * 500)+100} to {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}}\n`}
        else if(tpo === 2){d+=`${t}remove ${Math.floor(Math.random() * 500)+100} from {${lista2[Math.floor(Math.random() * lista2.length)]}${random(r)}}\n`}
        
    }
    return d
  }
}
