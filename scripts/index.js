//각 이미지 표시 함수
const showFlower = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");

    imgView1.setAttribute("src","./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";
}

const showBird = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");

    imgView1.setAttribute("src","./images/cityBird.png");
    imgViewText.innerHTML = "갈매기";
    txtWrap.style.display = "block";
}

const showFish = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    
    imgView1.setAttribute("src","./images/cityFish.png");
    imgViewText.innerHTML = "고등어";
    txtWrap.style.display = "block";
}



//DOM로드 후
document.addEventListener("DOMContentLoaded",() => {
    const imgIcon1 = document.querySelector("#imgIcon1");
    const imgIcon2 = document.getElementById("imgIcon2");
    const imgIcon3 = document.querySelector("#imgIcon3");

    imgIcon1.addEventListener("mouseover", showFlower);
    imgIcon2.addEventListener("mouseover", showBird);
    imgIcon3.addEventListener("mouseover", showFish);
});