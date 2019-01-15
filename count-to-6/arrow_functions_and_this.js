var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(_ => console.log(this.yelp));
    }
};
foot.kick();
