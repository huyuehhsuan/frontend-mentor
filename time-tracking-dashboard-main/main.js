const data = fetch('./data.json')
    .then(function(res) {
        return res.json()
    })
    .then(function(resdata) {
        createDomElement(resdata)
    })

function createDomElement(resdata) {
    const period = document.querySelectorAll(".period")
    const content = document.querySelector(".content")
    let dataList = []
    const bgList = ["var(--Light-red-work)", "var(--Soft-blue-play)", "var(--Light-red-study)", "var(--Lime-green-exercise)", "var(--Violet-social)", "var(--Soft-orange-self)"]
    resdata.forEach((data, i) => {
        data.bgcolor = ""
        data.bgcolor = bgList[i]
        dataList.push(data)
    })
    period.forEach((item) => {
        item.addEventListener("click", function() {
            period.forEach(i => {
                i.classList.remove("active")
            })
            item.classList.add("active")
            let choose = item.innerHTML.charAt(0).toLowerCase() + item.innerHTML.slice(1)
            let domElements = ""
            dataList.forEach((i, index) => {
                let result
                if (choose === "daily") {
                    result = dataList.map(data => data.timeframes.daily)
                }
                if (choose === "weekly") {
                    result = dataList.map(data => data.timeframes.weekly)
                }
                if (choose === "monthly") {
                    result = dataList.map(data => data.timeframes.monthly)
                }
                domElements += `<div class="card" style="background-color: ${i.bgcolor};">
                <img src="https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/time-tracking-dashboard-main/images/icon-${i.title.charAt(0).toLowerCase()+i.title.slice(1)}.svg" alt="icon-work" class="card-icon">
                <div class="card-content">
                    <div class="card-content-top">
                        <p class="work">${i.title}</p>
                        <img src="https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/time-tracking-dashboard-main/images/icon-ellipsis.svg" alt="ellipsis" class="ellipsis"></div>
                    <div class="card-content-bottom">
                        <p class="hrs">${result[index].current}hrs</p>
                        <p class="last">Last ${choose} - ${result[index].previous}hrs</p>
                    </div>
                </div>
            </div>`;
            });
            content.innerHTML = domElements;
        })
    })
    let domElements = ""
    dataList.forEach((i, index) => {
        const result = resdata.map(data => data.timeframes.daily)
        console.log(result);
        domElements += `<div class="card" style="background-color: ${i.bgcolor};">
                <img src="https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/time-tracking-dashboard-main/images/icon-${i.title.charAt(0).toLowerCase()+i.title.slice(1)}.svg" alt="icon-work" class="card-icon">
                <div class="card-content">
                    <div class="card-content-top">
                        <p class="work">${i.title}</p>
                        <img src="https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/time-tracking-dashboard-main/images/icon-ellipsis.svg" alt="ellipsis" class="ellipsis"></div>
                    <div class="card-content-bottom">
                        <p class="hrs">${result[index].current}hrs</p>
                        <p class="last">Last Daily - ${result[index].previous}hrs</p>
                    </div>
                </div>
            </div>`;
    });
    content.innerHTML = domElements;

}