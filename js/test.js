function Test () {
    this.a = 15;
}

Test.prototype.display = function () {
    console.log(this.a, this.b, Test.c);
}

Test.prototype.b = 25;
Test.c = 35;
