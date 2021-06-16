function time(nuo, iki, trukme) {
  let pakeistasIki = iki;
  if (nuo > iki) {
    pakeistasIki = 24 + iki;
  }
  for (let i = nuo * 60; i <= pakeistasIki * 60; i += trukme) {
    const h = Math.floor(i / 60);
    const m = i - h * 60;
    const mH = h % 24;
    console.log(`${mH < 10 ? '0' + mH : mH}:${m < 10 ? '0' + m : m}`);
  }
}

time(22, 3, 45);

/*

8:00
8:45
9:30
10:15
11:00
11:45
12:30


    */
