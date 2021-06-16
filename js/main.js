function tortoGabalas(tortuKiekis, zmoniuKiekis, tortoSvoris) {
  const zmoniuPerTorta = Math.ceil(zmoniuKiekis / tortuKiekis);
  return Math.floor((tortoSvoris / zmoniuPerTorta) * 1000);
}

console.log(tortoGabalas(3, 4, 1)); // 166
