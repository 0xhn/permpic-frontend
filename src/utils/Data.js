export default {
    folders: [
        {
            parentId: null,
            id: 1,
            name: "HTML5|JavaScript|SQL",
            isShow: true,
            isChecked: false,
            type: "html",
            isStretch: true,
            children: [
                {
                    parentId: 1,
                    id: 11,
                    name: "The HTML",
                    isShow: true,
                    isChecked: false,
                    type: "html",
                    updateTime: "2019-2-8",
                    content: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <style>
        #header {
            background-color:black;
            color:white;
            text-align:center;
            padding:5px;
        }
        #nav {
            line-height:30px;
            background-color:#eeeeee;
            height:300px;
            width:100px;
            float:left;
            padding:5px;
        }
        #section {
            width:350px;
            float:left;
            padding:10px;
        }
        #footer {
            background-color:black;
            color:white;
            clear:both;
            text-align:center;
            padding:5px;
        }
    </style>
    <body>
    
    <div id="header">
        <h1>City Gallery</h1>
    </div>
    
    <div id="nav">
        London<br>
        Paris<br>
        Tokyo<br>
    </div>
    
    <div id="section">
        <h1>London</h1>
        <p>
            London is the capital city of England. It is the most populous city in the United Kingdom,
            with a metropolitan area of over 13 million inhabitants.
        </p>
        <p>
            Standing on the River Thames, London has been a major settlement for two millennia,
            its history going back to its founding by the Romans, who named it Londinium.
        </p>
    </div>
    
    <div id="footer">
        Copyright W3School.com.cn
    </div>
    <script>
        for (var i = 0; i < 10; i++) {
            console.info("Hello World");
        }
    </script>
    </body>
    </html>`
                },
                {
                    parentId: 1,
                    id: 12,
                    name: "The JAVAScript",
                    isShow: true,
                    isChecked: false,
                    type: "javascript",
                    updateTime: "2019-2-8",
                    content:
                        `function startTime() {
        var today = new Date()
        var h = today.getHours()
        var m = today.getMinutes()
        var s = today.getSeconds()
        // add a zero in front of numbers<10
        m = checkTime(m)
        s = checkTime(s)
        document.getElementById('txt').innerHTML = h + ":" + m + ":" + s
        t = setTimeout('startTime()', 500)
    }
    
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }`
                },
                {
                    parentId: 1,
                    id: 13,
                    name: "HELLO WORLD",
                    isShow: true,
                    isChecked: false,
                    type: 'java',
                    updateTime: "2019-2-8",
                    content: `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`
                },
                {
                    parentId: 1,
                    id: 14,
                    name: "The SQL",
                    isShow: true,
                    isChecked: false,
                    type: 'sql',
                    updateTime: "2019-2-8",
                    content: `SELECT LastName,FirstName FROM Persons;
    UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'`,
                },
            ],
        },
        {
            parentId: null,
            id: 999,
            name: "DEFAULT",
            isShow: false,
            isStretch: true,
            isChecked: false,
            children: [],
        }
    ],
    blogs: [
        {
            id: 1,
            title: "Generator ",
            author: null,
            tags: ["JavaScript","ES6"],
            previewContent: '??????????????????????????? generator function ?????????,???????????????????????????????????????????????????'+       '??????\n' +
            'function* gen() { ' +
            '  yield 1;' +
            '  yield 2;' +
            '  yield 3;' +
            '}' +
            'let g = gen(); ' +
            '// "Generator { }" ??????' +
            'Generator.prototype.next()' +
            '??????????????? yield????????????????????????' +
            'Generator.prototype.return()' +
            '???????????????????????????????????????' +
            'Generator.prototype.throw()' +
            '?????????????????????????????????'
           ,
            htmlContent: '<h3>Generator&nbsp;</h3><p><br></p><p class="ql-indent-1"><strong>?????????</strong>?????????????????? generator function ?????????,??????????????????<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable" target="_blank">????????????</a>???<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator" target="_blank">???????????????</a>???</p><p><br></p><p><br></p><h2>??????</h2><p><br></p><pre class="ql-syntax" spellcheck="false">function* gen() { \n' +
            '  yield 1;\n' +
            '  yield 2;\n' +
            '  yield 3;\n' +
            '}\n' +
            '\n' +
            'let g = gen(); \n' +
            '// "Generator { }"\n' +
            '</pre><p><br></p><p><br></p><h2>??????</h2><p><br></p><p class="ql-indent-1"><code style="background-color: rgba(220, 220, 220, 0.5); color: rgb(61, 126, 154);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next" target="_blank"><strong>Generator.prototype.next()</strong></a></code></p><p class="ql-indent-1">???????????????&nbsp;<code style="background-color: rgba(220, 220, 220, 0.5); color: rgb(61, 126, 154);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" target="_blank">yield</a></code>????????????????????????</p><p class="ql-indent-1"><code style="background-color: rgba(220, 220, 220, 0.5); color: rgb(61, 126, 154);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/return" target="_blank"><strong>Generator.prototype.return()</strong></a></code></p><p class="ql-indent-1">???????????????????????????????????????</p><p class="ql-indent-1"><code style="background-color: rgba(220, 220, 220, 0.5); color: rgb(61, 126, 154);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw" target="_blank"><strong>Generator.prototype.throw()</strong></a></code></p><p class="ql-indent-1">?????????????????????????????????</p><p><br></p><p><br></p><p><br></p><h2>??????</h2><p><br></p><p class="ql-indent-1">?????????????????????</p><pre class="ql-syntax" spellcheck="false">function* idMaker(){\n' +
            '    let index = 0;\n' +
            '    while(true)\n' +
            '        yield index++;\n' +
            '}\n' +
            '\n' +
            'let gen = idMaker(); // "Generator { }"\n' +
            '\n' +
            'console.log(gen.next().value); \n' +
            '// 0\n' +
            'console.log(gen.next().value); \n' +
            '// 1\n' +
            'console.log(gen.next().value); \n' +
            '// 2\n' +
            '// ...\n' +
            '</pre><p><br></p><p>??????: <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator" target="_blank">MDN</a></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>',
            date: new Date().toLocaleDateString(),
            updateTime: new Date().toLocaleDateString(),
            isShowBanner: true,
        },
        {
            id: 2,
            title: "Async Function",
            author: null,
            tags: ["JavaScript","ES8"],
            previewContent: 'async function ???????????????????????? AsyncFunction ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? Promise ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????? ????????????????????????',
            htmlContent: '<h2>Async Function</h2><p><br></p><p><code style="background-color: rgba(220, 220, 220, 0.5);"><strong>async function</strong></code>&nbsp;????????????????????????&nbsp;<code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction" target="_blank">AsyncFunction</a></code>&nbsp;???????????????????????????????????????????????????????????????????????????????????????????????????????????????&nbsp;<code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a></code>&nbsp;??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????&nbsp;<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function" target="_blank" style="color: rgb(153, 0, 0);">?????????????????????</a>&nbsp;????????????????????????</p><p><br></p><p><br></p><h3><span style="color: rgb(255, 255, 255);">Demo</span></h3><p><br></p><pre class="ql-syntax" spellcheck="false">function resolveAfter2Seconds() {\n' +
            '&nbsp;return new Promise(resolve =&gt; {\n' +
            '&nbsp;&nbsp;setTimeout(() =&gt; {\n' +
            '&nbsp;&nbsp;&nbsp;resolve(\'resolved\');\n' +
            '&nbsp;&nbsp;}, 2000);\n' +
            '&nbsp;});\n' +
            '}\n' +
            '\n' +
            'async function asyncCall() {\n' +
            '&nbsp;console.log(\'calling\');\n' +
            '&nbsp;var result = await resolveAfter2Seconds();\n' +
            '&nbsp;console.log(result);\n' +
            '&nbsp;// expected output: \'resolved\'\n' +
            '}\n' +
            '\n' +
            'asyncCall();\n' +
            '</pre><p><br></p><p><br></p><p><br></p><h2>??????</h2><p><br></p><p>????????????????????????<code style="color: rgb(61, 126, 154); background-color: rgba(220, 220, 220, 0.5);"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await" target="_blank">await</a></code>????????????????????????????????????????????????????????????Promise????????????????????????????????????????????????????????????</p><p>?????????await ??????????????????????????????????????????????????????????????????????????????????????????????????????</p><p>?????????????????????????????????????????????????????????????????????(?????????????????????????????????Promise)</p><p><br></p><p>??????:  <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank">async_function</a></p><p><br></p><p><br></p>',
            date: new Date().toLocaleDateString(),
            updateTime: new Date().toLocaleDateString(),
            isShowBanner: true,
        }
    ],
}