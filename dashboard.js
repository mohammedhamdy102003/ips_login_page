const fakeAttackData = [
  { type: "SQL Injection", percentage: 45, color: "#8833ff" },
  { type: "Brute Force", percentage: 25, color: "#33bfff" },
  { type: "Malware", percentage: 20, color: "#20c997" },
  { type: "DDoS", percentage: 10, color: "#ff4b5c" }
];
function renderAttackChart(data){

const ctx = document.getElementById("attackChart");

new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: data.map(a => a.type),

        datasets: [{
            data: data.map(a => a.percentage),
            backgroundColor: data.map(a => a.color),
            borderWidth:0,
            spacing:4,
            hoverOffset:10
        }]
    },

    options:{
        plugins:{
            legend:{display:false}
        },
        cutout:'70%',
        rotation:-90
    }
});

renderLegend(data);
}
function renderLegend(data){

const legend = document.querySelector(".attack-legend");

legend.innerHTML = "";

data.forEach(a => {

legend.innerHTML += `
<div>
   <span class="c" style="background:${a.color}"></span>
   ${a.type} — <b>${a.percentage}%</b>
</div>
`;

});
}
renderAttackChart(fakeAttackData);
