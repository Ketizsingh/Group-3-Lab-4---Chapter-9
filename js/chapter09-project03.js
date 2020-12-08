window.addEventListener("load", function () {

    document.getElementById('hide').style.display = "none"; //hide button disabled on load

    document.getElementById('hide').addEventListener("click", function (e) {

        if (e.target.tagName !== 'SPAN') {
            document.querySelectorAll("span.hoverNode").forEach(function (a) {
                a.remove()
            })
            document.getElementById('highlight').style.display = "block"; //hilglight button disabled
            document.getElementById('hide').style.display = "none"; //hide button disabled 
        }
    });


    document.getElementById('highlight').addEventListener("click", function () {

        document.getElementById('highlight').style.display = "none"; //hilglight button disabled
        document.getElementById('hide').style.display = "block"; //hide button enabled 

        findChilds('BODY');
    });


    function findChilds(node, firstTime = true) {

        if (firstTime) var node = document.querySelector('BODY');
        var childNodes = node.childNodes;
        for (var j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType == 1) {
                if (childNodes[j].className == 'hoverNode') {
                    continue;
                } else {
                    var tagname = childNodes[j].nodeName;
                    var parent = childNodes[j].parentNode.nodeName;
                    var newElement = document.createElement('span');
                    newElement.classList.add('hoverNode')
                    newElement.setAttribute("id", "hoverNode");
                    newElement.textContent = tagname;
                    newElement.onclick = function () {
                        var parentID = (this.parentNode.id) ? this.parentNode.id : 'Not available!';
                        var parentClassName = (this.parentNode.className) ? this.parentNode.className : 'Not available!';;
                        var parentTagName = (this.parentNode.nodeName) ? this.parentNode.nodeName : 'Not available!';
                        var parentInnerText = (this.parentNode.innerText) ? this.parentNode.innerText : 'Not available!';



                        alert(`Parent's Tag Name : ${parentTagName}
                        
Parent's ID : ${parentID}

Parent's Class Name : ${parentClassName}

Parent's Inner HTML : ${parentInnerText}`);
                    }
                    childNodes[j].append(newElement);
                    findChilds(childNodes[j], false)
                }
            }
        }
    }
});