import css from "./css";

let style = document.createElement("style");
style.innerHTML = css();
document.head.appendChild(style);

export default function db() {
  this.name = "db";
}
db.prototype.start = function (num = 1) {
  if (db.prototype.flag != null) {
    db.prototype.flag = null;
    db.prototype.end();
  }
  db.prototype.flag = new Date().getTime();
  let d = document.createElement("div");
  d.className = "loader-" + num;
  let l = document.createElement("div");
  l.className = "loader";
  l.append(d);
  document.body.appendChild(l);
};
db.prototype.end = function () {
  let d = document.getElementsByClassName("loader");
  d.length > 0 && d[0].remove();
};

db.prototype.call = function (time, cb) {
  if (db.prototype.callFlag != null) {
    clearTimeout(db.prototype.callFlag);
  }
  db.prototype.callFlag = setTimeout(() => {
    cb();
    clearTimeout(db.prototype.callFlag);
  }, time);
};
