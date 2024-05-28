let alcCount = 0;
let waterCount = 0;
let date = new Date().toISOString().split('T')[0];
let needsWater = false;

document.getElementById('datePicker').value = date;
document.getElementById('datePicker').addEventListener('change', (event) => {
    date = event.target.value;
    resetCounts();
    updateStatus();
});

function drinkAlc() {
    if (needsWater) {
        alert("No Water, No Drink");
    } else {
        alcCount++;
        if (alcCount % 3 === 0) {
            needsWater = true;
        }
        updateStatus();
    }
}

function drinkWater() {
    waterCount++;
    if (needsWater) {
        needsWater = false;
        document.getElementById('motivationMessage').innerText = "Good！次のお酒を楽しんで！";
    } else {
        document.getElementById('motivationMessage').innerText = "水を飲んで元気になろう！";
    }
}

function updateStatus() {
    document.getElementById('alcCount').innerText = alcCount;
    document.getElementById('motivationMessage').innerText = "";
}

function resetCounts() {
    alcCount = 0;
    waterCount = 0;
    needsWater = false;
    document.getElementById('motivationMessage').innerText = "";
}

// 初期表示を更新
updateStatus();
