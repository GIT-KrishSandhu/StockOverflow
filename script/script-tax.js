let taxChartInstance = null;

function showSection(section) {
  document.getElementById('calculatorSection').classList.toggle('hidden', section !== 'calculator');
  document.getElementById('educationSection').classList.toggle('hidden', section !== 'education');
  document.getElementById('calculatorTab').classList.toggle('active-tab', section === 'calculator');
  document.getElementById('educationTab').classList.toggle('active-tab', section === 'education');
}

function calculateTax() {
  const stcg = parseFloat(document.getElementById('stcg').value) || 0;
  const ltcg = parseFloat(document.getElementById('ltcg').value) || 0;
  const intraday = parseFloat(document.getElementById('intraday').value) || 0;
  const fo = parseFloat(document.getElementById('fo').value) || 0;
  const dividend = parseFloat(document.getElementById('dividend').value) || 0;
  const other = parseFloat(document.getElementById('other').value) || 0;

  const stcgTax = stcg * 0.15;
  const ltcgTax = Math.max(ltcg - 100000, 0) * 0.10;
  const intradayTax = intraday * 0.30;
  const foTax = fo * 0.30;
  const totalTax = stcgTax + ltcgTax + intradayTax + foTax;

  document.getElementById('resultOutput').innerText = `Estimated Tax: ₹${totalTax.toFixed(2)}`;
  document.getElementById('results').classList.remove('hidden');

  const breakdownItems = [
    `STCG Tax (15%): ₹${stcgTax.toFixed(2)}`,
    `LTCG Tax (10% beyond ₹1L): ₹${ltcgTax.toFixed(2)}`,
    `Intraday Tax (30%): ₹${intradayTax.toFixed(2)}`,
    `F&O Tax (30%): ₹${foTax.toFixed(2)}`
  ];
  document.getElementById('breakdownList').innerHTML = breakdownItems.map(item => `<li>${item}</li>`).join('');

  if (taxChartInstance) taxChartInstance.destroy();
  const ctx = document.getElementById('taxChart').getContext('2d');
  taxChartInstance = new Chart(ctx, { type: 'doughnut', data: { labels: ['STCG', 'LTCG', 'Intraday', 'F&O'], datasets: [{ data: [stcgTax, ltcgTax, intradayTax, foTax], backgroundColor: ['#f87171', '#34d399', '#60a5fa', '#fbbf24'] }] }, options: { responsive: true } });
}