var config= {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var bichoMaluco

// Carrega os recursos do jogo
function preload(){
    this.load.image('sea', 'assets/bg_azul-escuro.png');
    // logo do instituto de tecnologia e lideranca em sao paulo brasil
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    // peixe maluco
    this.load.image('broski', 'assets/peixes/peixe_serio.png')
}




// criar e configurar elementos do jogo
function create(){
    this.add.image(400, 300, 'sea');
// logo do institudo de tecnologia e lideranca em sao paulo brasil
    this.add.image(400, 525, 'logo').setScale(0.45);
// guardar o peixe em uma var
    bichoMaluco = this.add.image(400, 300, 'broski');
// transformando a var
    bichoMaluco.setFlip(true, false);
    
// pra q servia isso?
// this.add.image(400,300, 'broski').setOrigin(0.5, 0.5).setFlip(true, false);
}




// define a lógica de atualização em tempo real do jogo
function update(){
    //controles do bichao
    bichoMaluco.x = this.input.x;
    bichoMaluco.y = this.input.y;
}