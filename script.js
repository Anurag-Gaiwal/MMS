function gm() {
    const msg = document.getElementById("msg");
    const btn = document.getElementById("btn");

    btn.addEventListener('click',()=>{
        const url = 'https://api.quotable.io/random';
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            msg.innerHTML = data.content;
        })
        .catch(err=>{alert("issue: "+err)})
    })
}
gm();