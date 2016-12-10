var Intro = function () {

}

module.exports = Intro;

var music;
var volume;
var activeframe = 0;

Intro.prototype = {
    preload: function () {
        this.load.image('blackbar', 'assets/intro/blackbar.png');
        this.load.spritesheet('FBI', 'assets/intro/fbi.png', 420, 500);
        this.load.spritesheet('trumpback', 'assets/intro/trumpback.png', 575, 475);
        this.load.audio('intromus', 'assets/intro/introsong.mp3');
    },

    create: function () {
        this.stage.backgroundColor = '#FFF8FF';
        music = this.add.audio('intromus');
        music.play();

        this.bartop = this.add.sprite(0, 0, 'blackbar');
        this.bartop.scale.x = 2;
        this.barbottom = this.add.sprite(0, 400, 'blackbar');
        this.barbottom.scale.x = 2;
        this.barbottom.scale.y = 2.5;

        volume = this.add.button(750, 0, 'volume', this.toggleMute, this, 1, 0, 2);
        volume.scale.x = .5;
        volume.scale.y = .5;


        this.time.events.add(Phaser.Timer.SECOND * 4.46, () => {
            this.fbi = this.add.image(-125, this.world.centerY - 175, 'FBI');
            this.fbi.scale.x = .5;
            this.fbi.scale.y = .5;
            this.jump = this.fbi.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0], 13, true);
            this.jump2 = this.fbi.animations.add('jump2', [0, 1, 2, 3, 4, 5, 6], 13, false);
            this.jump3 = this.fbi.animations.add('jump3', [6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6], 13, false);
            this.hop = this.fbi.animations.add('hop', [7, 8, 9, 10], 10, false);

            this.trumpback = this.add.image(816, this.world.centerY - 200, 'trumpback');
            this.trumpback.scale.x = .6;
            this.trumpback.scale.y = .6;
            this.trumpattack = this.trumpback.animations.add('attack', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 11, 12, 13], 9, false);

            this.fbitween = this.add.tween(this.fbi);

            this.fbitween.to({ x: 470 }, 1200, 'Linear', true, 0);

            this.trumptween = this.add.tween(this.trumpback);

            this.trumptween.to({ x: 110 }, 1200, 'Linear', true, 0);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 5.674230, () => {
            this.jump.play();
            this.jump.onLoop.add(() => {
                if (this.jump.loopCount == 1) {
                        this.jump.loop = false;
                    }
            }, this);
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 7.97, () => {
            this.trumpattack.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 8.94, () => {
            this.jump2.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 10.965, () => {
            this.jump3.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 12.465, () => {
            this.hop.play();
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 15, () => {
            this.blackscreen = this.add.sprite(0, 0, 'blackbar');
            this.blackscreen.scale.x = 10;
            this.blackscreen.scale.y = 10;
        }, this);

        this.time.events.add(Phaser.Timer.SECOND * 15.5, () => {
            this.game.state.start('Menu');
        }, this);
    },

    update: function () {
    },

    toggleMute: function () {
        if (!this.game.sound.mute) {
            this.game.sound.mute = true;
            volume.destroy();
            mutevolume = this.add.button(750, 0, 'volume', this.toggleMute, this, 4, 3, 5);
            mutevolume.scale.x = .5;
            mutevolume.scale.y = .5;
        }
        else {
            this.game.sound.mute = false;
            activeframe = 0;
            mutevolume.destroy();
            volume = this.add.button(750, 0, 'volume', this.toggleMute, this, 1, 0, 2);
            volume.scale.x = .5;
            volume.scale.y = .5;
        }
    },
}
        //CoderDojo should be all about fun; If there's no fun to be had, we have a problem.
        //So, we should be able to take breaks, goof off, and have fun. But only in moderation.
        //If you can manage your time wisely and actually get something done, then you've earned the right to browse memes and play video games.
        //This doesn't mean you can spend most of your time doing so, though.
        //Let's do some math. The average time we start actually doing stuff is 12:30, so let's assume we have 2.5 hours of work time.
        //If I work for 80% of that time, I'd work for two hours of that 2.5 hours.
        //As long as I got somewhere in my project, that'd be an excellent amount of time to work a day.
        //But where'd the other 30 minutes go?
        //If I work productively and efficiently in those 2.5 hours, that extra time could go towards whatever the heck I want. Including games.
        //What I'm trying to get across is simple. At CoderDojo Toledo, we trust you. We trust that you'll accomplish something, as we are using the space that PotterTech generously lets us borrow.
        //As long as you're productive and efficient, we can allow some free time.