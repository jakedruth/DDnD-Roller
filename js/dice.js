class Die {
    constructor(value = 1, color = "white") {
        this.value = value;
        this.color = color;
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }

    toString() {
        return this.value;
    }

    toHTML() {
        return '<span class="' + this.color + '">' + this.value + '</span>';
    }
}

class DicePair {
    constructor(d1, d2) {
        this.d1 = d1;
        this.d2 = d2;
    }

    getSum() {
        return this.d1.value + this.d2.value;
    }

    isDouble() {
        return this.d1.value == this.d2.value
    }

    toString() {
        var value = "" + this.getSum() + "(" + this.d1.value + ", " + this.d2.value + ")";
        if (this.isDouble()) {
            value = "_D_" + value
        }
        return value;
    }

    toElement() {
        var cl = this.isDouble() ? ' class="double"' : '';
        var sum = this.getSum().toString();
        return '<span' + cl + '>' + sum.padStart(2, ' ') + ' </span> (' + this.d1.toHTML() + this.d2.toHTML() + ')'
    }

    sumToHTML() {
        var cl = this.isDouble() ? ' class="double"' : '';
        var sum = this.getSum().toString();
        return '<span' + cl + '>' + sum.padStart(2, ' ') + ' </span>';
    }

    diceToHTML() {
        return this.d1.toHTML() + this.d2.toHTML();
    }
}