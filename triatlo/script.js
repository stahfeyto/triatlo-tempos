function timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
}

function transitionTimeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);
    return (minutes || 0) * 60 + (seconds || 0);
}

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
}

function secondsToTransitionTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes}m ${seconds}s`;
}

function calculateIntervals() {
    const referenceSwim = timeToSeconds(document.getElementById('referenceSwim').value);
    const referenceBike = timeToSeconds(document.getElementById('referenceBike').value);
    const referenceRun = timeToSeconds(document.getElementById('referenceRun').value);
    const referenceT1 = transitionTimeToSeconds(document.getElementById('referenceT1').value);
    const referenceT2 = transitionTimeToSeconds(document.getElementById('referenceT2').value);

    const actualSwim = timeToSeconds(document.getElementById('actualSwim').value);
    const actualBike = timeToSeconds(document.getElementById('actualBike').value);
    const actualRun = timeToSeconds(document.getElementById('actualRun').value);
    const actualT1 = transitionTimeToSeconds(document.getElementById('actualT1').value);
    const actualT2 = transitionTimeToSeconds(document.getElementById('actualT2').value);

    const swimInterval = actualSwim - referenceSwim;
    const bikeInterval = actualBike - referenceBike;
    const runInterval = actualRun - referenceRun;
    const t1Interval = actualT1 - referenceT1;
    const t2Interval = actualT2 - referenceT2;
    const totalInterval = (actualSwim + actualBike + actualRun + actualT1 + actualT2) - (referenceSwim + referenceBike + referenceRun + referenceT1 + referenceT2);

    document.getElementById('swimResult').textContent = `Intervalo Natação: ${secondsToTime(Math.abs(swimInterval))}`;
    document.getElementById('bikeResult').textContent = `Intervalo Ciclismo: ${secondsToTime(Math.abs(bikeInterval))}`;
    document.getElementById('runResult').textContent = `Intervalo Corrida: ${secondsToTime(Math.abs(runInterval))}`;
    document.getElementById('t1Result').textContent = `Intervalo Transição 1: ${secondsToTransitionTime(Math.abs(t1Interval))}`;
    document.getElementById('t2Result').textContent = `Intervalo Transição 2: ${secondsToTransitionTime(Math.abs(t2Interval))}`;
    document.getElementById('totalResult').textContent = `Intervalo Total: ${secondsToTime(Math.abs(totalInterval))}`;
}

function clearForm() {
    const fields = ['referenceSwim', 'referenceBike', 'referenceRun', 'referenceT1', 'referenceT2', 'actualSwim', 'actualBike', 'actualRun', 'actualT1', 'actualT2'];

    fields.forEach(field => document.getElementById(field).value = '');

    document.getElementById('swimResult').textContent = '';
    document.getElementById('bikeResult').textContent = '';
    document.getElementById('runResult').textContent = '';
    document.getElementById('totalResult').textContent = '';
    document.getElementById('t1Result').textContent = '';
    document.getElementById('t2Result').textContent = '';
}
