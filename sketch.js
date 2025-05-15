let tractor;  // Emoji do trator
let tractorX, tractorY;  // Posições do trator
let plantX, plantY;      // Posições da planta

function setup() {
  createCanvas(600, 400);
  tractor = '🚜';
  plant = '🌱';
  
  // Posições iniciais
  tractorX = width / 2;
  tractorY = height / 2;
  spawnPlant();  // Gera a primeira planta
}

function draw() {
  background(210, 180, 140);  // Cor de fundo marrom puxado pro bege
  
  // Desenha o trator
  textSize(64);
  text(tractor, tractorX, tractorY);
  
  // Desenha a planta
  textSize(64);
  text(plant, plantX, plantY);
  
  // Verifica se o trator pegou a planta
  if (dist(tractorX, tractorY, plantX, plantY) < 50) {
    spawnPlant();  // Gera uma nova planta
  }
  
  // Controle do trator com as teclas
  if (keyIsDown(65)) {  // 'a' para esquerda
    tractorX -= 5;
  }
  if (keyIsDown(83)) {  // 's' para direita
    tractorX += 5;
  }
  if (keyIsDown(87)) {  // 'w' para cima
    tractorY -= 5;
  }
  if (keyIsDown(90)) {  // 'z' para baixo
    tractorY += 5;
  }
}

// Função para gerar uma nova planta em uma posição aleatória
function spawnPlant() {
  plantX = random(50, width - 50);
  plantY = random(50, height - 50);
}
