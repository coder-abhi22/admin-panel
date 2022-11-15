// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';


var tbl= document.getElementById('table');


var ajax = new XMLHttpRequest();
ajax.open('get','http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
ajax.send();
ajax.addEventListener('readystatechange', function onReadyStateChange(e){
    if(e.target.readyState === 4 && e.target.status === 200){
        var data = JSON.parse(e.target.responseText)
        // console.log(data)
        for(i=0;i<data.length;i++){
        tbl.innerHTML += `
                        <tr class="data-row" id="row${[i+1]}">
                            <td class="column1">${data[i].id}</td>
                            <td class="column2">${data[i].firstName}</td>
                            <td class="column3">${data[i].lastName}</td>
                            <td class="column4">${data[i].email}</td>
                            <td class="column5">${data[i].phone}</td>
                            <td class="column6" style="display:none">${data[i].address.streetAddress}</td>
                            <td class="column6" style="display:none">${data[i].address.city}</td>
                            <td class="column6" style="display:none">${data[i].address.state}</td>
                            <td class="column6" style="display:none">${data[i].address.zip}</td>
                            <td class="column7" style="display:none">${data[i].description}</td>
                        </tr>            
        `
    }
}
})


var btn = document.getElementById('table')

btn.addEventListener('click',function(e){
    // infos = JSON.stringify(e.target.parentNode)
    // console.log(e.target.parentNode.children[2])
    // console.log(e.target.parentNode)
    var info = document.getElementById('info-content')
    info.innerHTML = `<div><b>User selected:</b>${e.target.parentNode.children[1].innerText}</div>
    <div>
        <b>Description: </b>
        <textarea cols="50" rows="5" readonly>
        ${e.target.parentNode.children[9].innerText}
        </textarea>
    </div>
    <div><b>Address:</b>${e.target.parentNode.children[5].innerText}</div>
    <div><b>City:</b>${e.target.parentNode.children[6].innerText}</div>
    <div><b>State:</b>${e.target.parentNode.children[7].innerText}</div>
    <div><b>Zip:</b>${e.target.parentNode.children[8].innerText}</div>`
})


var search = document.getElementById('search-box')

search.addEventListener('keyup', function tableSearch() {
    let input, filter, table, tr;

    //Intialising Variables
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td0= tr[i].getElementsByTagName("td")[0];
        td1= tr[i].getElementsByTagName("td")[1];
        td2= tr[i].getElementsByTagName("td")[2];
        td3= tr[i].getElementsByTagName("td")[3];
        td4= tr[i].getElementsByTagName("td")[4];

        let txtValue0 = td0.textContent;
        let txtValue1 = td1.textContent;
        let txtValue2 = td2.textContent;
        let txtValue3 = td3.textContent;
        let txtValue4 = td4.textContent;

        if (txtValue0.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        }
        else if(txtValue1.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ""
        }
        else if(txtValue2.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ""
        }
        else if(txtValue3.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ""
        }
        else if(txtValue4.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ""
        }
        else {
            tr[i].style.display = "none";
        }
    }
})

var t = document.getElementById('table');
t.addEventListener('click', function(e){
    var a = e.target.parentNode.id;
    // console.log(e.target.parentNode.parentNode.children[1])
    // console.log(e.target.parentNode.parentNode.children)
    var c = e.target.parentNode.parentNode.children
    // c.classList.remove('color')
    for(i=0;i<c.length;i++){
        var d = e.target.parentNode.parentNode.children[i]
        d.style.backgroundColor ="white"
        // console.log(e.target.parentElement.children)
    }
    var f = e.target.parentNode
    f.style.backgroundColor = "	#3cb371"
})
